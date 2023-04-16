export type Study = {
  title: string;
  institution: string;
  initial_date: Date;
  final_date: Date | null;
  description?: string;
  description_list?: string[];
  certificate?: string;
}
