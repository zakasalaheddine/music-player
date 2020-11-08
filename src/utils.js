import { v4 as uuidv4 } from "uuid";

export const chillHop = () => {
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
      name: "Flushing the Stairs",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
      artist: "Leavv",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10315",
      color: ["#85B47E", "#033944"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sleepover",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      artist: "Nymano, JK the Sage",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
      color: ["#F4A49E", "#5B518B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sodium",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      artist: "Philanthrope",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9149",
      color: ["#C7F1ED", "#353C5C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Bliss",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
      artist: "Misha, Jussi Halme",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
      color: ["#AC8CB1", "#2A416D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Brazil",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/87506c6ad4c74ecfef7f61b52a4b3e0ab0564390-1024x1024.jpg",
      artist: "Monma, Misha, Jussi Halme",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8279",
      color: ["#7469C6", "#663F90"],
      id: uuidv4(),
      active: false,
    }
  ];
};
