import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppContext } from "../app.context"
import { usePlayer } from "../hooks/usePlayer"

export default function PlayerControls({ audioRef }) {
  const { toggleIsPlaying, skipHandler } = usePlayer()
  const { state: { isPlaying } } = useAppContext()

  const playSongHandler = () => {
    const { current } = audioRef
    isPlaying ? current.pause() : current.play()
    toggleIsPlaying()
  }

  const skipTrackHandler = async (direction) => {
    await skipHandler(direction)
    if (isPlaying) audioRef.current.play()
  }
  return (
    <div className="play-control">
      <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" onClick={() => skipTrackHandler('skip-back')} />
      <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} size="2x" />
      <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" onClick={() => skipTrackHandler('skip-forward')} />
    </div>
  )
}