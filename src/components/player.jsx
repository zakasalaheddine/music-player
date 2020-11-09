import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { playAudio } from "../utils";

export default function Player({ setSongs, setCurrentSong, songs, songInfo, setSongInfo, audioRef, song, isPlaying, setIsPlaying }) {
  const { id } = song

  useEffect(() => {
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
  }, [song])

  const playSongHandler = () => {
    const { current } = audioRef
    isPlaying ? current.pause() : current.play()
    setIsPlaying(!isPlaying)
  }
  const getTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex(val => val.id === id)
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length])
    } else if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1])
      } else {
        setCurrentSong(songs[(currentIndex - 1) % songs.length])
      }
    }
    playAudio(isPlaying, audioRef)
  }

  const trackAnim = {
    transform: `translateX(${songInfo.animatedPercentage}%)`
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{ background: `linear-gradient(to right, ${song.color[0]}, ${song.color[1]} )` }} className="track">
          <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
          <div className="animate-track" style={trackAnim}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" onClick={() => skipTrackHandler('skip-back')} />
        <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} size="2x" />
        <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" onClick={() => skipTrackHandler('skip-forward')} />
      </div>
    </div>
  )
}