export interface Project {
    title: string;
    description: string;
    readmeLink: string;
    logoLink: string;
    setImage: ImgDetail[];
    slug: string;

    dynamicUrl: string;

    status: 'Completado' | 'En pausa' | 'MVP' | 'Planificación' | 'Abandonado';
    technologies: string[];

    githubLink: string;
    demoLink: string;
}

export interface ImgDetail {
    imgLink: string;
    alt: string;
    
}