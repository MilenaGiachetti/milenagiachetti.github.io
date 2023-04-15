export type WorkExperience = {
  position:         string;
  company:          string;
  company_website:  string;
  initial_date:     Date;
  final_date:       Date | null;
  stack:            string[];
  description:      string | null;
  description_list: string[] | null;
}
