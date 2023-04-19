import { type WorkExperience } from '@/types/workExperience'

const workExperiences: WorkExperience[] = [
  {
    title: 'web ui developer, ssr. adv.',
    institution: 'Globant',
    institutionWebsite: '',
    initialDate: new Date('12/01/2022'),
    finalDate: null,
    stack: ['ReactJS', 'Redux']
  },
  {
    title: 'frontend web developer',
    institution: 'ConsultR',
    institutionWebsite: '',
    initialDate: new Date('02/01/2022'),
    finalDate: new Date('12/01/2022'),
    stack: ['React', 'TypeScript', 'Redux toolkit', 'RTK Query', 'SCSS']
  },
  {
    title: 'frontend web developer',
    institution: 'The 8Agency',
    institutionWebsite: '',
    initialDate: new Date('06/01/2020'),
    finalDate: new Date('02/01/2022'),
    stack: ['ReactJS', 'Redux'],
    description: 'experience.the_8agency_description',
    descriptionList: [
      'experience.the_8agency_description_item_1',
      'experience.the_8agency_description_item_2',
      'experience.the_8agency_description_item_3'
    ]
  }
]

export const firstExperienceDate: Date = new Date('06/01/2020')

export default workExperiences
