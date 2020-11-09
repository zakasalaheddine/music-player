import LibrarySong from "./library-song";

export default function Library({ libraryStatus, isPlaying, songs, setCurrentSong, audioRef, setSongs }) {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong setSongs={setSongs} isPlaying={isPlaying} songs={songs} key={song.id} audioRef={audioRef} setCurrentSong={setCurrentSong} song={song} />
        ))}
      </div>
    </div>
  )
}