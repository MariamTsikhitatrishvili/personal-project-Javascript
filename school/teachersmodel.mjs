import {Validator} from  './validator.mjs';
export class TeachersModel{
    constructor(){
        this.teachers = new Map();
        this.schema = {
  
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "emails": [
              {
                "email": "string",
                "primary": "boolean"
              }
            ],
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string", // male or female
            "subjects": [
              {
                "subject": "string"
              }
            ],
            "description": "string",
          };
    }
    add(teacher){
        if (!Validator.validator(teacher,this.schema)){
            throw new Error ('Parameters aren\'t valid');
        }
        let id = Math.floor(Math.random() * 1000);
        teacher.id = id;
        this.teachers.set(id,teacher);
        return id;
    }
 
    read(teacherId){
        if(!this.teachers.has(teacherId)){
            throw new Error ('there is no such teacher');
       } 
       else {
        let teach = this.teachers.get(teacherId);
        return  {
            teacherId,
            ...teach
        };
       }
    }
    remove(teacherId) {
        if (!this.teachers.has(teacherId)) {
            throw Error('the teacher with this ID does not exist')
        }
        else { 
            this.teachers.delete(teacherId);
        }
    }
    update(teacherId, updatedProfile){
        if(Validator.validator(updatedProfile,this.schema)){
            let teach = this.teachers.get(teacherId);
  
            Object.assign(teach, updatedProfile);
            return teacherId;
        }
        else {
            throw new Error ('profile cant be updated')
        }
    }
}
