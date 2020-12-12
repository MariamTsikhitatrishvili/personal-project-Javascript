import {Validator} from  './validator.mjs';
export class PupilsModel{
    constructor(){
        this.pupils = new Map();
        this.schema = {
            "name": {
              "first": "string",
              "last": "string"
            },
            "image": "string",
            "dateOfBirth": "string", // format date
            "phones": [
              {
                "phone": "string",
                "primary": "boolean"
              }
            ],
            "sex": "string", // male OR female
            "description": "string"
          };
    }

     add(pupil){
        if (!Validator.validator(pupil,this.schema)){
            throw new Error ('Parameters aren\'t valid');
        }
        let id = Math.floor(Math.random() * 1000);
        pupil.id = id;
        this.pupils.set(id,pupil);
        return this.pupils.get(id);
     }
     read(pupilid){
        if(!this.pupils.has(pupilid)){
            throw new Error ('there is no such pupil');
       } 
       else {
        return this.pupils.get(pupilid);
       }
     }
     update(pupilid, updatedProfile){
        if(Validator.validator(updatedProfile,this.schema)){
            let pupil = this.pupils.get(pupilid);
  
            Object.assign(pupil, updatedProfile);
        }
        else {
            throw new Error ('profile cant be updated')
        }
     }
     remove(pupilid){
        if (!this.pupils.has(pupilid)) {
            throw Error('the pupil with this ID does not exist')
        }
        else { 
            this.pupils.delete(pupilid);
        }
     }

}