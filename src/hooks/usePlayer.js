import { useAppContext } from "../app.context";
import { appTypes } from "../app.reducer";

export const usePlayer = () => {
  const {
    state: { songs, currentSong },
    dispatch,
  } = useAppContext();

  const toggleIsPlaying = () => {
    dispatch({ type: appTypes.TOGGLE_IS_PLAYING });
  };

  const toggleLibraryStatus = () => {
    dispatch({ type: appTypes.TOGGLE_LIBRARY_STATUS });
  };

  const changeSong = (song) => {
    dispatch({ type: appTypes.SET_CURRENT_SONG, payload: song });
    const newSongs = songs.map((val) => {
      if (song.id === val.id) {
        return {
          ...val,
          active: true,
        };
      }
      return {
        ...val,
        active: false,
      };
    });
    updateSongs(newSongs);
  };

  const updateSongs = (updatedSongs) => {
    dispatch({ type: appTypes.SET_SONGS, payload: updatedSongs });
  };

  const skipHandler = async (direction) => {
    const currentIndex = songs.findIndex((val) => val.id === currentSong.id);
    if (direction === "skip-forward") {
      await changeSong(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await changeSong(songs[songs.length - 1]);
      } else {
        await changeSong(songs[(currentIndex - 1) % songs.length]);
      }
    }
  };

  const updateSongInfo = (songInfos) => {
    dispatch({ type: appTypes.UPDATE_SONG_INFO, payload: songInfos });
  };

  return {
    toggleIsPlaying,
    toggleLibraryStatus,
    changeSong,
    skipHandler,
    updateSongs,
    updateSongInfo,
  };
};
