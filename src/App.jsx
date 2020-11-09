import { useRef, useState } from "react";
import Library from "./components/library";
import Nav from "./components/nav";
import Player from "./components/player";
import Song from "./components/song"
import "./styles/app.scss"
import { getSongs } from "./utils";

function App() {
  const audioRef = useRef(null)
  const [songs, setSongs] = useState(getSongs())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0, animatedPercentage: 0 })
  const [libraryStatus, setLibraryStatus] = useState(false)
  const timeUpdateHandler = ({ target: { currentTime, duration } }) => {

    const roundedCurrent = Math.round(currentTime)
    const roundedDuration = Math.round(duration)
    const animatedPercentage = Math.round(roundedCurrent / roundedDuration * 100)
    setSongInfo({ ...songInfo, currentTime, duration, animatedPercentage })
  }
  return (
    <div className="App">
      <Nav setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} song={currentSong} />
      <Library libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying} songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} />

      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} src={currentSong.audio} ref={audioRef} />
    </div>
  );
}

export default App;
