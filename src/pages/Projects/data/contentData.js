import images from './imagesData';

const projectsData = [
    {
        number: '01',
        proyectName: 'Experiencia 3D',
        proyectTech: 'THREE.JS | CANNON-ES | WEBPACK',
        proyectDescription: 'Experiencia Web 3D construída con three.js y cannon-es y modelo y animaciones de mixamo. En proceso.',
        liveLink: 'https://milenagiachetti.github.io/mixamo-three.js/',
        githubLink: 'https://github.com/MilenaGiachetti/mixamo-three.js',
        bgPath: images.guifoBg,
        screenPath: images.mixamoBg
    },
    {
        number: '02',
        proyectName: 'Gif.OS',
        proyectTech: 'JS | CSS | API | RecordRTC',
        proyectDescription: 'Proyecto construído con la API de giphy, librería RecordRTC y Media Capture and Streams API.',
        liveLink: 'https://milenagiachetti.github.io/guifos/',
        githubLink: 'https://github.com/MilenaGiachetti/guifos',
        bgPath: images.guifoBg,
        screenPath: images.guifoScreen
    },
    {
        number: '03',
        proyectName: 'React Chat',
        proyectTech: 'REACT | NODE | EXPRESS | MySQL | SOCKET.IO',
        proyectDescription: 'Proyecto chat en React para aprender sobre WebSockets y Socket.io',
        liveLink: 'https://github.com/MilenaGiachetti/react-chat',
        bgPath: images.guifoBg,
        screenPath: images.mixamoBg
    },
    {
        number: '04',
        proyectName: 'Resto Backend',
        proyectTech: 'NODE | EXPRESS | MySQL',
        proyectDescription: 'Desarrollo de un backend para un restaurante ficticio utilizando NodeJS, Express y MySQL. CRUD de usuarios, productos y ordenes, login y sistema de autorización y autenticación de usuarios realizado con Json Web Tokens.',
        githubLink: 'https://github.com/MilenaGiachetti/delilahresto_back',
        bgPath: images.guifoBg,
        screenPath: images.mixamoBg
    }
];

export default projectsData;