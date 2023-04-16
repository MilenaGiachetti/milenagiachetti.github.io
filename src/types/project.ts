export type Project = {
  order: string;
  name: string;
  id: string;
  initial_date: string;
  final_date: string | null;
  technologies: string[];
  github_url: string;
  deploy_url: string;
}