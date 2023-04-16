export interface Study {
  title: string
  institution: string
  initialDate: Date
  finalDate: Date | null
  description?: string
  descriptionList?: string[]
  certificate?: string
}
