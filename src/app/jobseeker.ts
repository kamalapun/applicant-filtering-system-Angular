export class Jobseeker {
        id : number;
        firstName: string;
        lastName:string;
        gender:string;
        email: string;
        address : string;
        phone:number;
        qualification:string;
        jobPost:string;
        experience:number;
        skills:string;
        interactivity:string;
        constructor(id?:number,firstName?: string,lastName?:string,gender?:string,email?: string,
            address? : string,phone? : number,qualification?:string,jobPost?:string,
            experience?:number,skills?:string,interactivity?:string){
                this.id = id ? id :null;
                this.firstName = firstName ? firstName :'';
                this.lastName = lastName ? lastName :'';
                this.gender = gender ? gender :'';
                this.email = email ? email :'';
                this.address = address ? address :'';
                this.phone = phone ? phone :null;
                this.qualification = qualification ? qualification :'';
                this.jobPost = jobPost ? jobPost :'',
                this.experience = experience ? experience :null;
                this.skills = skills ? skills :'';
                this.interactivity = interactivity ? interactivity :'';
            }
}
