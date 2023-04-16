export type WorkExperience = {
  title: string;
  institution: string;
  institution_website: string;
  initial_date: Date;
  final_date: Date | null;
  stack?: string[];
  description?: string;
  description_list?: string[];
}
