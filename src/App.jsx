import { useRef } from "react";
import { useAppContext } from "./app.context";
import Library from "./components/library";
import Nav from "./components/nav";
import Player from "./components/player";
import Song from "./components/song"
import { usePlayer } from "./hooks/usePlayer";
import "./styles/app.scss"

function App() {
  const audioRef = useRef(null)

  const { state: { libraryStatus, currentSong, songInfo, isPlaying } } = useAppContext()
  const { skipHandler, updateSongInfo } = usePlayer()
  const songEndedHandler = async () => {
    await skipHandler("skip-forward")
    if (isPlaying) audioRef.current.play();
  }
  const timeUpdateHandler = ({ target: { currentTime, duration } }) => {
    const roundedCurrent = Math.round(currentTime)
    const roundedDuration = Math.round(duration)
    const percentage = Math.round(roundedCurrent / roundedDuration * 100)
    updateSongInfo({ ...songInfo, current: currentTime, duration, percentage })
  }


  return (
    <div className={`app ${libraryStatus ? 'library-active' : ''}`}>
      <Nav />
      <Song />
      <Player audioRef={audioRef} />
      <Library audioRef={audioRef} />

      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} onEnded={songEndedHandler} src={currentSong.audio} ref={audioRef} />
    </div>
  );
}

export default App;
