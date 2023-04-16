import { Study } from "../types/study";

const studies: Study[] = [
  {
    title: "phyton full stack",
    institution: "codo a codo",
    initial_date: new Date("08/01/2021"),
    final_date: new Date("12/01/2021"),
    description_list: [
      "education.cac_description_item_1",
      "education.cac_description_item_2",
      "education.cac_description_item_3",
    ],
    // link to see certificate or image to open it
    certificate: "",
  },
  {
    title: "full stack web development",
    institution: "acamica",
    initial_date: new Date("08/01/2019"),
    final_date: new Date("03/01/2020"),
    description: "education.acamica_description",
    description_list: [
      "education.acamica_description_item_1",
      "education.acamica_description_item_2",
      "education.acamica_description_item_3",
      "education.acamica_description_item_4",
      "education.acamica_description_item_5",
      "education.acamica_description_item_6",
      "education.acamica_description_item_7",
    ],
    certificate: "test",
  },
]

export default studies;