import { useAppContext } from "../app.context"
import { usePlayer } from "../hooks/usePlayer"

export default function LibrarySong({ song, audioRef }) {
  const { cover, name, artist, active } = song
  const { changeSong } = usePlayer()
  const { state: { isPlaying } } = useAppContext()
  const changeAudioHandler = async () => {
    await changeSong(song)
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