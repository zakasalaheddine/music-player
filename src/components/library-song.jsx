
export default function LibrarySong({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) {
  const { cover, name, artist, active, id } = song
  const changeAudioHandler = async () => {
    await setCurrentSong(song);

    const newSongs = songs.map(selectedSong => {
      if (id === selectedSong.id) {
        return {
          ...selectedSong,
          active: true
        }
      } else {
        return {
          ...selectedSong,
          active: false
        }
      }
    })
    setSongs(newSongs)
    if (isPlaying) audioRef.current.play()
  }
  return (
    <div className={`library-song ${active ? 'selected' : ''}`} onClick={changeAudioHandler}>
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}