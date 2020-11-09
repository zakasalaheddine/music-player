import { useAppContext } from "../app.context"

export default function Song() {
  const { state: { currentSong } } = useAppContext()
  const { cover, name, artist } = currentSong
  return (
    <div className="song-container">
      <img src={cover} alt={name} />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  )
}