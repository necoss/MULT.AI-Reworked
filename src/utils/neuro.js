import '@mediapipe/face_detection';
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-webgl';
import * as faceDetection from '@tensorflow-models/face-detection';
import * as handPoseDetection from '@tensorflow-models/hand-pose-detection';
export let faceDetector;
export let handsDetector;
export const initializeDetection = async (canvasRef, setLoading) => {
    const faceModel = faceDetection.SupportedModels.MediaPipeFaceDetector;
    const handModel = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
      runtime: 'tfjs',
    };
    const handsConfig = {
      runtime: 'tfjs',
      modelType: 'full',
      maxHands: 2,
    };
    
    if(!faceDetector) faceDetector = await faceDetection.createDetector(faceModel, detectorConfig);
    if(!handsDetector) handsDetector = await handPoseDetection.createDetector(handModel, handsConfig);
    const image = document.getElementById('blank');
    const ctx = canvasRef.current.getContext('2d');
    ctx.drawImage(image, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const imageData = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
    let firstDetection = await faceDetector.estimateFaces(imageData);
    let secondDetection = await handsDetector.estimateHands(imageData);
    setLoading(false);
  };