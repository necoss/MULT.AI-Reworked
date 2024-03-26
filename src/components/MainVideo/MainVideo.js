import Loader from '../Loader/Loader';
import TheGame from '../TheGame/TheGame';
import {video} from '../../data/videos';
import React, { useState, useRef, useEffect } from 'react';
import './MainVideo.css';
import { isFingerTouchingNose, isFingerTouchingTwoPoint } from '../../utils/pointsDetection';
import {faceDetector, handsDetector, initializeDetection} from '../../utils/neuro';

const videos = video.gameVideos;
const greetings = video.start;
const story = video.story;
const success = video.success;
const endGame = video.gameEnd;
const explainVideos = video.explainVideos;
let videoIndex = 0;


const MainVideo = () => {
    const [isGameStarted, setGameStarted] = useState(false);
    const [video, setVideo] = useState(story);
    const [loading, setLoading] = useState(true);
    const currentVideo = useRef(story);
    const playerRef = useRef(null);
    const canvasRef = useRef(document.createElement('canvas'));
    const intervalRef = useRef(null);




    const handleStartGame = () => {
        setGameStarted(true);
    };


    const detectAllPoints = async () => {
      if(isGameStarted && document.querySelector(".webcam")){
        console.log(videoIndex);
        const webcam = document.querySelector('.webcam').querySelector('video');
        const ctx = canvasRef.current.getContext('2d');
        ctx.drawImage(webcam, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
        const facePredictions = await faceDetector.estimateFaces(imageData);
        const handPredictions = await handsDetector.estimateHands(imageData);
        
        let nose;
        let rightEye;
        let leftEye;
        let leftEar;
        let rightEar;
        
        if(facePredictions[0]){
            nose = facePredictions[0].keypoints[2];
            rightEye = facePredictions[0].keypoints[1];
            leftEye = facePredictions[0].keypoints[0];
            leftEar = facePredictions[0].keypoints[4];
            rightEar = facePredictions[0].keypoints[5];
        }


        if(currentVideo.current !== greetings && currentVideo.current !== success){
          handPredictions.forEach((hand) => {
            let point = hand.keypoints[8];
            
            if (isFingerTouchingNose(nose, point) && currentVideo.current === videos[0]) {
                //Здесь носа
                currentVideo.current = success
                setVideo(success);
          }});
          const rightHand = handPredictions.find(hand => hand.handedness === 'Right');
          const leftHand = handPredictions.find(hand => hand.handedness === 'Left');
      
      
          if (leftHand || rightHand) {
              if (isFingerTouchingTwoPoint(leftEye, rightEye, leftHand?.keypoints[8], rightHand?.keypoints[8]) && currentVideo.current === videos[2]) {
                  //Здесь коснулись глаз
                  currentVideo.current = endGame;
                  setVideo(endGame);
              }
      
              if (isFingerTouchingTwoPoint(leftEar, rightEar, leftHand?.keypoints[8], rightHand?.keypoints[8]) && currentVideo.current === videos[1]) {
                  //Здесь коснулись ушей
                  currentVideo.current = success
                  setVideo(success);
              }
          }
        } 

      }
    };


    useEffect(() => {

      if(isGameStarted){ 
        initializeDetection(canvasRef, setLoading);
        intervalRef.current = setInterval(detectAllPoints, 500);
      }

    }, [isGameStarted]);





    function endedHandle() {
      if (videoIndex === 2 && currentVideo.current === endGame){
        videoIndex = 0;
        currentVideo.current = greetings;
        setVideo(greetings);
        clearInterval(intervalRef.current);
        setGameStarted(false);
      }
      else {
      setVideo((prevVideo) => {
        if(prevVideo === story){
          currentVideo.current = greetings;
          return greetings;
        }
        else if(prevVideo === greetings){
          currentVideo.current = explainVideos[0];
          return explainVideos[0];
        }
        else if(prevVideo === success){
          if(currentVideo.current === success) videoIndex = (videoIndex + 1) % videos.length;
          const newIndex = videoIndex;
          currentVideo.current = explainVideos[newIndex];
          return explainVideos[newIndex];
        }
        else if(prevVideo === explainVideos[videoIndex]){
          currentVideo.current = videos[videoIndex];
          return videos[videoIndex];
        }
        currentVideo.current = prevVideo
        playerRef.current.seekTo(0);
        return prevVideo
      });
      }
    }

    return (
      <React.Fragment>
        {isGameStarted ? (
            (loading) ? 
            (<Loader/>) :
            (<TheGame playerRef={playerRef} video={video} endedHandle={endedHandle}/>)
        ) : 
        (
          <button className="startgame_btn" onClick={handleStartGame}>
            Начать игру
          </button>
        )}
      </React.Fragment>
    );
  };
  
  export default MainVideo;