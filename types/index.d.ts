export interface navLink {
  label: string;
  path: string;
}
export interface skill {
  image: string;
  label: string;
}
export interface Project {
  name: string;
  image: string;
  shortDescription: string;
  deployedLink: string;
  githubLink: string;
  detailedDescription: string[];
  skills: { image: string; label: string }[];
}
export interface education {
  title: string;
  date: string;
  platform: string;
  link: string;
}
export interface experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
}
