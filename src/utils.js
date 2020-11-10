import { v4 as uuidv4 } from "uuid";

export const getSongs = () => {
  return [
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
      name: "Canary Forest",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#185361", "#7D4338"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Silience",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",
      artist: "Toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8425",
      color: ["#A46B46", "#BCCC44"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Never Ending",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
      artist: "Sitting Duck, squeeda",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9652",
      color: ["#6CCABC", "#7B6247"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Paraglider",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",
      artist: "Kendall Miles, H E R B",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9318",
      color: ["#DC714B", "#000000"],
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
