import { WorkExperience } from "../types/workExperience";

const workExperiences: WorkExperience[] = [
  {
    position: "web ui developer, ssr. adv.",
    company: "Globant",
    company_website: "",
    initial_date: new Date("12/01/2022"),
    final_date: null,
    stack: ["ReactJS", "Redux"],
    description: null,
    description_list: null,
  },
  {
    position: "frontend web developer",
    company: "ConsultR",
    company_website: "",
    initial_date: new Date("02/01/2022"),
    final_date: new Date("12/01/2022"),
    stack: ["React", "TypeScript", "Redux toolkit", "RTK Query", "SCSS"],
    description: null,
    description_list: null,
  },
  {
    position: "frontend web developer",
    company: "The 8Agency",
    company_website: "",
    initial_date: new Date("06/01/2020"),
    final_date: new Date("02/01/2022"),
    stack: ["ReactJS", "Redux"],
    description: "Development of frontend and various backend features using the following stacks:",
    description_list: [
      "SCSS | React / NextJS | Redux | NodeJS | Express | MySQL.",
      "HTML | CSS | PHP | CodeIgniter | MySQL | phpMyAdmin.",
      "Creation of 3d interactive demos with Three.js.",
    ],
  },
]

export const firstExperienceDate: Date = new Date("06/01/2020");

export default workExperiences;