import typingTestAppImg from '../public/imgs/TypingTestApp.png'
import chatAppImg from '../public/imgs/chatApp.png'
import tagImg from '../public/imgs/tag.png'
import musicAppImg from '../public/imgs/musicApp.png'
export const typingTestApp = {
    name: 'Typing Test App',
    technologies: ['MongoDb',"React",'Express.js',"Node.js","Typescript"],
    description: "This project's main goal was to learn a new technology and implement it to create a Full-Stack CRUD App, I chose to use Typescript due to it's high demand in the job market. ",
    github: ['https://github.com/robertoooc/TypingTestApp-client','https://github.com/robertoooc/TypingTestApp-server'],
    demo: 'https://benevolent-medovik-143b82.netlify.app/',
    img: typingTestAppImg
}
export const musicApp = {
    name: 'Music App',
    technologies: ['Postgres',"EJS",'Express.js',"Node.js","Musixmatch API","Last.fm API"],
    description: 'Full-stack EJS/Node.js music application allowing users to search any songs, view song details, create playlists, and view other public playlists made by others.',
    github: ['https://github.com/robertoooc/project-2'],
    demo: 'https://roberto-project-two-1114.herokuapp.com/',
    img: musicAppImg
}
export const chatApp = {
    name: 'Chat App',
    technologies: ['MongoDb',"React",'Express.js',"Node.js","Socket.io"],
    description: 'Full-stack chat application using Socket.io to allow users to receive and emit messages with no delay.',
    github: ['https://github.com/robertoooc/Project-3-Client','https://github.com/robertoooc/Project-3-server'],
    demo: 'https://courageous-selkie-645b7a.netlify.app/',
    img: chatAppImg
}
export const tag = {
    name: 'Tag',
    technologies: ['HTML-Canvas',"CSS",'Javascript'],
    description: "Created a Front-end game based on hit detection and sprite animations. Originally took inspiration from the online game 'Fireboy and Watergirl', but took a different approach and created a 2 player tag game.",
    github: ['https://github.com/robertoooc/project1-pitch'],
    demo: 'https://robertoooc.github.io/project1-pitch/',
    img: tagImg
}

export const timeline=[
    {
        year: 2018,
        text: 'Initial introduction into engineering through Vex Robotics, was able to compete in tournaments and my team even qualified and competed at a signature event hosted in one of the Google buildings in Sunnyvale, CA.'
    },
    {
        year: 2020,
        text: 'The start of my 2 year journey in working in restaurants. Gained multiple experiences from it that not only helped me grow and mature as a person but also provided some usesful transferrable skills.'
    },
    {
        year: 2021,
        text: 'Gained my first interaction to programming through taking Ap Computer Science. It helped further guide my decision into which engineering pathway I wanted to pursue.'
    },
    {
        year: 2022,
        text: "I took initiative in graduating High School a year early, ambitiously wanting to get started on pursuing a career and enrolled into General Assembly's Software Engineering Immersive program."
    },{
        year: 2023,
        text: "I took initiative in graduating High School a year early, ambitiously wanting to get started on pursuing a career and enrolled into General Assembly's Software Engineering Immersive program."
    }
]
