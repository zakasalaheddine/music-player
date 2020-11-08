import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export default function Player({ song, isPlaying, setIsPlaying }) {
  const { audio } = song
  const audioRef = useRef(null)
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 })
  const playSongHandler = () => {
    const { current } = audioRef
    isPlaying ? current.pause() : current.play()
    setIsPlaying(!isPlaying)
  }

  const timeUpdateHandler = ({ target: { currentTime, duration } }) => {
    setSongInfo({ ...songInfo, currentTime, duration })
  }

  const getTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} size="2x" />
        <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" />
      </div>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} src={audio} ref={audioRef} />
    </div>
  )
}