import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav({ setLibraryStatus }) {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => { setLibraryStatus(prev => !prev) }}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  )
}