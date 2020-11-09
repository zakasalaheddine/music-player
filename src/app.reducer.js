export const appTypes = {
  UPDATE_SONG_INFO: "UPDATE_SONG_INFO",
  TOGGLE_IS_PLAYING: "TOGGLE_IS_PLAYING",
  TOGGLE_LIBRARY_STATUS: "TOGGLE_LIBRARY_STATUS",
  SET_SONGS: "SET_SONGS",
  SET_CURRENT_SONG: "SET_CURRENT_SONG",
};

export const initialState = {
  songs: [],
  currentSong: null,
  isPlaying: false,
  libraryStatus: false,
  songInfo: {
    current: 0,
    duration: 0,
    percentage: 0,
  },
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case appTypes.SET_SONGS: {
      return {
        ...state,
        songs: payload,
      };
    }

    case appTypes.SET_CURRENT_SONG: {
      return {
        ...state,
        currentSong: payload,
      };
    }

    case appTypes.UPDATE_SONG_INFO: {
      return {
        ...state,
        songInfo: payload,
      };
    }

    case appTypes.TOGGLE_IS_PLAYING: {
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    }

    case appTypes.TOGGLE_LIBRARY_STATUS: {
      return {
        ...state,
        libraryStatus: !state.libraryStatus,
      };
    }

    default:
      return state;
  }
};
