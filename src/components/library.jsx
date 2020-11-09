import LibrarySong from "./library-song";

export default function Library({ isPlaying, songs, setCurrentSong, audioRef }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong isPlaying={isPlaying} key={song.id} audioRef={audioRef} setCurrentSong={setCurrentSong} song={song} />
        ))}
      </div>
    </div>
  )
}