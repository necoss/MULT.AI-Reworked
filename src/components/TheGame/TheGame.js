
import React from "react"
import ReactPlayer from 'react-player'
import ReactWebcam from 'react-webcam'
import ReactAudioPlayer from 'react-audio-player';

function TheGame({playerRef, video, endedHandle}){
    return(
        <React.Fragment>
            {video !== "videos/Story.mp4" && <ReactAudioPlayer className="audio-player" src={"audio/melody.mp3"} autoPlay={true} loop={true} volume={0.2}/>}
            <div className="game-container">
                <div className="player">
                    <ReactPlayer ref={playerRef} width={'100%'} height={'100%'} url={video} playing={true} onEnded={endedHandle} />
                </div>
                <div className="webcam">
                    <ReactWebcam height={400} width={300} mirrored={true}/>
                </div>
            </div>

        </React.Fragment>

    )
}

export default TheGame