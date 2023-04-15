export type WorkExperience = {
  position:         string;
  company:          string;
  company_website:  string;
  initial_date:     string;
  final_date:       string | null;
  stack:            string[];
  description:      string | null;
  description_list: string[] | null;
}
