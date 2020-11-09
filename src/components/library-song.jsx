export default function LibrarySong({ song, setCurrentSong, audioRef, isPlaying }) {
  const { cover, name, artist } = song
  const changeAudioHandler = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((_) => {
          audioRef.current.play()
        })
      }
    }
  }
  return (
    <div className="library-song" onClick={changeAudioHandler}>
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}