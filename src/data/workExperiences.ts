import { WorkExperience } from "../types/workExperience";

const workExperiences: WorkExperience[] = [
  {
    title: "web ui developer, ssr. adv.",
    institution: "Globant",
    institution_website: "",
    initial_date: new Date("12/01/2022"),
    final_date: null,
    stack: ["ReactJS", "Redux"],
  },
  {
    title: "frontend web developer",
    institution: "ConsultR",
    institution_website: "",
    initial_date: new Date("02/01/2022"),
    final_date: new Date("12/01/2022"),
    stack: ["React", "TypeScript", "Redux toolkit", "RTK Query", "SCSS"],
  },
  {
    title: "frontend web developer",
    institution: "The 8Agency",
    institution_website: "",
    initial_date: new Date("06/01/2020"),
    final_date: new Date("02/01/2022"),
    stack: ["ReactJS", "Redux"],
    description: "experience.the_8agency_description",
    description_list: [
      "experience.the_8agency_description_item_1",
      "experience.the_8agency_description_item_2",
      "experience.the_8agency_description_item_3",
    ],
  },
]

export const firstExperienceDate: Date = new Date("06/01/2020");

export default workExperiences;