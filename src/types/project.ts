export type Project = {
  name:         string;
  id:           string;
  initial_date: string;
  final_date:   string | null;
  github_url:   string;
  deploy_url:   string;
}