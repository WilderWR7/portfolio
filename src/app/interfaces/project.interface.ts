export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string;
    demoUrl: string;
    githubUrl: string;
    featured: boolean;
}