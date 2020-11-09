import { useAppContext } from "../app.context";
import LibrarySong from "./library-song";

export default function Library({ audioRef }) {
  const { state: { libraryStatus, songs } } = useAppContext()
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong key={song.id} audioRef={audioRef} song={song} />
        ))}
      </div>
    </div>
  )
}