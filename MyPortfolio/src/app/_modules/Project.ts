import { Tag } from "./Tag";

export interface Project{
    id : number;
    name: string;
    summary: string; 
    description: string;
    projectlink: string;
    pictures: string[];
    tags: Tag[];
}