import { type Project } from '../types/project'

const projects: Project[] = [
  {
    order: '00',
    name: 'Portfolio',
    id: 'portfolio',
    initialDate: '04/2023',
    finalDate: null,
    technologies: ['React'],
    github_url: '',
    deploy_url: ''
  },
  {
    order: '01',
    name: 'Mixamo',
    id: 'mixamo',
    initialDate: '04/2023',
    finalDate: null,
    technologies: ['Three.js'],
    github_url: '',
    deploy_url: ''
  },
  {
    order: '02',
    name: 'Architecture Studio',
    id: 'ohter',
    initialDate: '04/2023',
    finalDate: null,
    technologies: ['JavaScript'],
    github_url: '',
    deploy_url: ''
  },
  {
    order: '03',
    name: 'Other2',
    id: 'ohter2',
    initialDate: '04/2023',
    finalDate: null,
    technologies: ['JavaScript', 'React'],
    github_url: '',
    deploy_url: ''
  }
]

export default projects
