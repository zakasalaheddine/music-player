import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePlayer } from "../hooks/usePlayer";

export default function Nav() {
  const { toggleLibraryStatus } = usePlayer()
  return (
    <nav>
      <h1>ZakaDEV Player</h1>
      <button onClick={toggleLibraryStatus}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  )
}