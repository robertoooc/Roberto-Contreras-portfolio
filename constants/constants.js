import typingTestAppImg from "../public/imgs/TypingTestApp.png";
import chatAppImg from "../public/imgs/chatApp.png";
import tagImg from "../public/imgs/tag.png";
import musicAppImg from "../public/imgs/musicApp.png";
import { GiDiploma, GiMeatCleaver } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { SiProbot } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const typingTestApp = {
  name: "Typing Test App",
  technologies: ["MongoDb", "React", "Express.js", "Node.js", "Typescript"],
  description:
    "A user-friendly web application was developed using React, Node.js, Express, Tailwind CSS, Victory, and TypeScript.                                              It features a typing test with personalized recommendations and user accounts for storing previous tests, along with visual charts for easy performance tracking. ",
  github: [
    "https://github.com/robertoooc/TypingTestApp-client",
    "https://github.com/robertoooc/TypingTestApp-server",
  ],
  demo: "https://benevolent-medovik-143b82.netlify.app/",
  img: typingTestAppImg,
};
export const musicApp = {
  name: "Music App",
  technologies: [
    "Postgres",
    "EJS",
    "Express.js",
    "Node.js",
    "Musixmatch API",
    "Last.fm API",
  ],
  description:
    "Developed an engaging lyrics web application that seamlessly combines the MusixMatch API for song search and details with album images from the Last.fm API. Users can create playlists, both private and public, with interactive features such as commenting and liking by other users, fostering a social and enjoyable experience.",
  github: ["https://github.com/robertoooc/project-2"],
  demo: "https://roberto-project-two-1114.herokuapp.com/",
  img: musicAppImg,
};
export const chatApp = {
  name: "Chat App",
  technologies: ["MongoDb", "React", "Express.js", "Node.js", "Socket.io"],
  description:
    "Full-stack chat application using Socket.io to allow users to receive and emit messages with no delay.",
  github: [
    "https://github.com/robertoooc/Project-3-Client",
    "https://github.com/robertoooc/Project-3-server",
  ],
  demo: "https://courageous-selkie-645b7a.netlify.app/",
  img: chatAppImg,
};
export const tag = {
  name: "Tag",
  technologies: ["HTML-Canvas", "CSS", "Javascript"],
  description:
    "Developed a multiplayer game of tag using JavaScript and HTML Canvas with collision detection and sprite animations. Employed an Object-Oriented approach for code that is clear, flexible, and scalable.",
  github: ["https://github.com/robertoooc/project1-pitch"],
  demo: "https://robertoooc.github.io/project1-pitch/",
  img: tagImg,
};

export const timeline = [
  {
    year: 2018,
    text: "Initial introduction into engineering through Vex Robotics, was able to compete in tournaments and my team even qualified and competed at a signature event hosted in one of the Google buildings in Sunnyvale, CA.",
    icon: <SiProbot size={40} />,
  },
  {
    year: 2020,
    text: "The start of my 2 year journey in working in restaurants. Gained multiple experiences from it that not only helped me grow and mature as a person but also provided some usesful transferrable skills.",
    icon: <GiMeatCleaver size={40} />,
  },
  {
    year: 2021,
    text: "Gained my first interaction to programming through taking Ap Computer Science and was immediately drawn to it. It helped further guide my decision into which engineering pathway I wanted to pursue.",
    icon: <FaJava size={40} />,
  },
  {
    year: 2022,
    text: "I took initiative in graduating High School a year early, ambitiously wanting to get started on pursuing a career and enrolled into General Assembly's Software Engineering Immersive program.",
    icon: <GiDiploma size={40} />,
  },
  {
    year: 2023,
    text: "Completed General Assembly's Software Immersive program. Currently working on a project, a HotSchedules replica in typescript to showcase better understanding of SQL databases.",
    icon: <RiComputerLine size={40} />,
  },
];
