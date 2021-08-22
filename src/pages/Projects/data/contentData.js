import images from './imagesData';

const projectsData = [
    {
        number: '01',
        projectName: 'Experiencia 3D',
        projectTech: 'THREE.JS | CANNON-ES | WEBPACK',
        projectDescription: 'Experiencia Web 3D construída con three.js y cannon-es y modelo y animaciones de mixamo. En proceso.',
        liveLink: 'https://milenagiachetti.github.io/mixamo-three.js/',
        githubLink: 'https://github.com/MilenaGiachetti/mixamo-three.js',
        screenPath: images.mixamoBg
    },
    {
        number: '02',
        projectName: 'Gif.OS',
        projectTech: 'JS | CSS | API | RecordRTC',
        projectDescription: 'Proyecto construído con la API de giphy, librería RecordRTC y Media Capture and Streams API.',
        liveLink: 'https://milenagiachetti.github.io/guifos/',
        githubLink: 'https://github.com/MilenaGiachetti/guifos',
        screenPath: images.guifoScreen
    },
    {
        number: '03',
        projectName: 'React Chat',
        projectTech: 'REACT | NODE | EXPRESS | MySQL | SOCKET.IO',
        projectDescription: 'Proyecto chat en React para aprender sobre WebSockets y Socket.io',
        githubLink: 'https://github.com/MilenaGiachetti/react-chat',
        screenPath: images.mixamoBg
    }
    // {
    //     number: '04',
    //     projectName: 'Resto Backend',
    //     projectTech: 'NODE | EXPRESS | MySQL',
    //     projectDescription: 'Desarrollo de un backend para un restaurante ficticio utilizando NodeJS, Express y MySQL. CRUD de usuarios, productos y ordenes, login y sistema de autorización y autenticación de usuarios realizado con Json Web Tokens.',
    //     githubLink: 'https://github.com/MilenaGiachetti/delilahresto_back',
    //     screenPath: images.mixamoBg
    // }
];

const otherProjectsData = [
    {
        number: '01',
        projectName: 'Resto Backend',
        projectTech: 'NODE | EXPRESS | MySQL',
        githubLink: 'https://github.com/MilenaGiachetti/delilahresto_back',
        image: "image1"
    },
    {
        number: '02',
        projectName: 'Resto Backend',
        projectTech: 'NODE | EXPRESS | MySQL',
        githubLink: 'https://github.com/MilenaGiachetti/delilahresto_back',
        image: "image2"
    },
    {
        number: '03',
        projectName: 'Resto Backend',
        projectTech: 'NODE | EXPRESS | MySQL',
        githubLink: 'https://github.com/MilenaGiachetti/delilahresto_back',
        image: "image3"
    },
];


export {projectsData, otherProjectsData};