import React, { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,  faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'
const Player = ({currentSong,  audioRef, isPlaying, setIsPlaying, setSongInfo, songInfo, }) => {

    const playSongHandler =() =>{
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
            
        }
        console.log()
    }
    function getTime(time){
        return(
            Math.floor(time / 60)+ ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    function dragHandler(e){
        console.log(e.target.value);
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0}
                    max={songInfo.duration || 0}
                    onChange={dragHandler}
                    value={songInfo.currentTime}
                    id="input" 
                    type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying == true ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-fowars" size="2x" icon={faAngleRight} />
            </div>
            
        </div>
    )
}

export default Player