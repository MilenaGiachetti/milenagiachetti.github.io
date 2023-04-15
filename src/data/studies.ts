import { Study } from "../types/study";

const studies: Study[] = [
  {
    name: "phyton full stack",
    institution: "codo a codo",
    initial_date: new Date("08/01/2021"),
    // if there's no final date it's because it's value is "Present"
    final_date: new Date("12/01/2021"),
    // if an array it should be a list, if it's a string it's just a plain text description
    // think maybe about how to mix them
    description: "",
    description_list: [
      "Front-end: HTML, CSS, Bootstrap, JavaScript, Vue", 
      "Tools & Methodologies: GIT, Scrum",
      "Back-end: MySQL, Python (POO), Flask, Django"
    ],
    // link to see certificate or image to open it
    certificate: "",
  },
  {
    name: "full stack web development",
    institution: "acamica",
    initial_date: new Date("08/01/2019"),
    final_date: new Date("03/01/2020"),
    description: "Globant's scholarship 'Code Your Future'",
    description_list: [
      "Web layout (HTML5, CSS3, SASS)",
      "Programming with JavaScript",
      "Usage of libraries & frameworks: Jquery, Bootstrap",
      "Node.JS",
      "API creation & consumption",
      "Databases",
      "Version control system GIT",
    ],
    certificate: "",
  },
]

export default studies;