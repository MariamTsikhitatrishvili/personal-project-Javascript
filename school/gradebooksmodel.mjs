import {Validator} from  './validator.mjs';
export class GradeBooksModel{
    constructor(groups, teachers, lms){
        this.grades = new Map();
        this.groups = {groups};
        this.teachers  = {teachers};
        this.lms = {lms};
    }

    add (level, id){
        if ( typeof id !== 'string' || typeof level !== 'number') throw new Error ('Invalid parameter');
        else {
            let id =Math.random().toString(32).substr(2, 8);
            this.grades.set(id , {level, id})
            return id;
        }     
    }
    clear(param){
        if(param) throw new Error ("clear doesn't need parameter");
        else this.grades.clear();
    }

    addRecord(gradebookId, record){
        if(typeof gradebookId !== "string" || typeof record !== "object") throw new Error("invalid parameters!");
        else { 
            this.grades.set("records",record);
            return this.grades;
        }


    }

    read(gradebookId, pupilId){
        if(typeof gradebookId !== "string" || typeof pupilId !== "number") throw new Error ("Parameters aren't valid!");
        else return this.grades;
    }

    readAll(gradebookId){
        if(typeof gradebookId !== "string") throw new Error ("type of gradebookId should be string");
        return Array.from(this.grades);
    }
}