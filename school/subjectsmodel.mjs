import { Validator } from "./validator.mjs";
export class SubjectsModel {
  constructor(subjects) {
    this.subjects = subjects;
    this.id = this.id;

    this.schema = {
      title: "string",
      lessons: "number",
      description: "string",
    };
    if (Validator.validator(subjects, this.schema)) {
      this.id = Math.floor(Math.random() * 1000);
    } else {
      throw new Error("Not valid parameters!");
    }
  }
}
