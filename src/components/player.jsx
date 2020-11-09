import { useAppContext } from "../app.context";
import { usePlayer } from "../hooks/usePlayer";
import PlayerControls from "./player-controls";

export default function Player({ audioRef }) {
  const { state: { currentSong: { color }, songInfo } } = useAppContext()
  const { updateSongInfo } = usePlayer()
  const { current, duration, percentage } = songInfo

  const getTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    updateSongInfo({ ...songInfo, current: e.target.value })
  }

  const trackAnim = {
    transform: `translateX(${percentage}%)`
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(current)}</p>
        <div style={{ background: `linear-gradient(to right, ${color[0]}, ${color[1]} )` }} className="track">
          <input min={0} max={duration || 0} value={current} onChange={dragHandler} type="range" />
          <div className="animate-track" style={trackAnim}></div>
        </div>
        <p>{duration ? getTime(duration) : '0:00'}</p>
      </div>
      <PlayerControls audioRef={audioRef} />
    </div>
  )
}