export interface WorkExperience {
  title: string
  institution: string
  institutionWebsite: string
  initialDate: Date
  finalDate: Date | null
  stack?: string[]
  description?: string
  descriptionList?: string[]
}
