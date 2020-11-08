import { useState } from "react";
import Player from "./components/player";
import Song from "./components/song"
import "./styles/app.scss"
import { getSongs } from "./utils";

function App() {
  const [songs, setSongs] = useState(getSongs())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} song={currentSong} />
    </div>
  );
}

export default App;
