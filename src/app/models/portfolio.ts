import { Education } from "./education";
import { Experience } from "./experience";
import { Project } from "./project";
import { Skill } from "./skill";

export class Portfolio {
    educations: Array<Education>;
    experiences: Array<Experience>;
    projects: Array<Project>;
    skills: Array<Skill>;
}