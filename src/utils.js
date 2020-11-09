import { v4 as uuidv4 } from "uuid";

export const getSongs = () => {
  return [
    {
      name: "Lmaallem",
      cover:
        "https://artwork.angham.me//webp/?id=850553",
      artist: "Saad Lamjarred",
      audio: "https://nadorzik.com/mp3/1/1bc852d22d2d3cc7e5e623f9e171c663.mp3",
      color: ["#DE7D4E", "#312623"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Love Your Voice",
      cover:
        "https://i1.sndcdn.com/artworks-000563756822-w9qeng-original.jpg",
      artist: "JONY",
      audio: "https://cf-media.sndcdn.com/WZTUo9rjCVOh.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vV1pUVW85cmpDVk9oLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2MDQ5MzEyMDd9fX1dfQ__&Signature=cJu9uuVVNAyDg~LIrZRqZH6IlQNXaLOxBJRRXQPJT1zw2SwkU9iyE0RdzjQEuxlHlMkWoLMplInTEgtjV5DcdqyW6gjqFL-V-FFiKaUBVfMsp0Sw2lUyxt41Xd9JCRQJjuHPlJrwXuV9ZzUaIonP3lhl2Bg5B6SF2a5zmIQJaujAR5mT2mrhGxoV-BmI61y4aw2dpcY7tsbqje2G-j9VNxh2~YF6pIg7P-GjGOIpuMtk12TgF5lqeUoTNVR5nHiRg-lDU7JfEhchIw4FMNxv4xSop2-CVwa-NQZUYv9vTC2RRRqMefASto3q3wEebfeZsMra5Z5N4G8J3yMUcXzaTQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
      color: ["#000000", "#ffffff"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cabin in the Woods",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philanthrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10315",
      color: ["#ED632D", "#B3786E"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Sleepover",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      artist: "Nymano, JK the Sage",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
      color: ["#F4A49E", "#5B518B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sodium",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      artist: "Philanthrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9149",
      color: ["#C7F1ED", "#353C5C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bliss",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
      artist: "Misha, Jussi Halme",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
      color: ["#AC8CB1", "#2A416D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Brazil",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/87506c6ad4c74ecfef7f61b52a4b3e0ab0564390-1024x1024.jpg",
      artist: "Monma, Misha, Jussi Halme",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8279",
      color: ["#7469C6", "#663F90"],
      id: uuidv4(),
      active: false,
    },
    
  ];
};

export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
