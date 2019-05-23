export class PostJob{
    id : number;
    name: string;
    post: string;
    gender:string;
    education:string;
    experience:number;
    skill:string;
    language:string;
    description:string;
    interactivity:string;
    constructor(id?:number,name?: string,post?: string,gender?:string,education?:string,
        experience?:number,skill?:string,language?:string,description?:string,interactivity?:string){
            this.id = id ? id :null;
            this.name = name ? name :'';
            this.post = post ? post :'';
            this.gender = gender ? gender :'';
            this.education = education ? education :'';
            this.experience = experience ? experience :null;
            this.skill = skill ? skill :'';
            this.language = language ? language :'';
            this.description = description ? description :'';
            this.interactivity = interactivity ? interactivity :'';
        }
}