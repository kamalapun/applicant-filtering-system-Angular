export class Jobseeker {
        id : number;
        firstName: string;
        lastName:string;
        gender:string;
        email: string;
        address : string;
        phone:number;
        highestDegree:string;
        training: string;
        experience:number;
        skills:string;
        interactivity:string;
        constructor(id?:number,firstName?: string,lastName?:string,gender?:string,email?: string,
            address? : string,phone? : number,highestDegree?:string,training? :string,
            experience?:number,skill?:string,interactivity?:string){
                this.id = id ? id :null;
                this.firstName = firstName ? firstName :'';
                this.lastName = lastName ? lastName :'';
                this.gender = gender ? gender :'';
                this.email = email ? email :'';
                this.address = address ? address :'';
                this.phone = phone ? phone :null;
                this.highestDegree = highestDegree ? highestDegree :'';
                this.training = training ? training :'';
                this.experience = experience ? experience :null;
                this.skills = skill ? skill :'';
                this.interactivity = interactivity ? interactivity :'';
            }
}
