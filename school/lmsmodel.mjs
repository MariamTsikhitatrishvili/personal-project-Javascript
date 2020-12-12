export class LMSModel{
    constructor(){
        this.subjects = new Map();
    }
    add (subject){
        if(!subject || typeof subject !== 'object'){
            throw new Error('Subject must be Object')

        }
        else {
            this.subjects.set(subject.id, subject);
            return true;
        }
    }
    remove (subject){
  
        if (!this.subjects.has(subject.id)) {
            throw Error('the subject with this ID does not exist')
        }
        else { 
            this.subjects.delete(subject.id);
        }
     }
     readAll(){

            let read = [];
            for (let [key, value] of this.subjects)  read.push(value);
            return read;
            
    }
     verify(subject){
         if (this.subjects.has(subject.id)){
             return true;
         }
         else {
             return false;
         }
     }

}
