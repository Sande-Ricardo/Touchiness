export interface UserData {

    aboutMeImg:string | null;
    aboutMeTitle:string;
    aboutMeText:string;
    
    // Frontend skills
    skillHImg:string[] | null;
    skillHTitle:string[];
    skillHText:string[];

    // Backend skills
    skillSImg:string[] | null;
    skillSTitle:string[];
    skillSText:string[];

    // Tools skills
    skillTImg:string[] | null;
    skillTTitle:string[];
    skillTText:string[];
    
    // Soft skills
    skillSoft:string[];

    // Projects
    projectImg:string[];
    projectTitle:string[];
    projectText:string[];
    projectLinkDemo:string[];
    projectLinkGitHub:string[];
}
