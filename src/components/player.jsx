import { faAngleLeft, faAngleRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export default function Player({ song, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null)
  const { audio } = song
  const playSongHandler = () => {
    const { current } = audioRef
    isPlaying ? current.pause() : current.play()
    setIsPlaying(!isPlaying)
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} className="play" icon={faPlay} size="2x" />
        <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" />
      </div>
      <audio src={audio} ref={audioRef} />
    </div>
  )
}