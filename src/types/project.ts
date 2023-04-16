export interface Project {
  order: string
  name: string
  id: string
  initialDate: string
  finalDate: string | null
  technologies: string[]
  github_url: string
  deploy_url: string
}
