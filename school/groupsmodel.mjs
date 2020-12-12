export class GroupsModel {
  constructor() {
    this.groups = new Map();
  }
  add(room) {
    if (typeof room !== "number") throw new Error("room must be number");
    let id = Math.random().toString(34).substr(4, 9);
    this.groups.set("room", room);
    this.groups.set("id", id);
    return this.groups.get("id");
  }
  addPupil(groupId, pupil) {
    if (typeof groupId === "string" && typeof pupil === "object") {
      if (this.groups.get("id") == groupId) {
        this.groups.set("pupil", pupil);
        return this.groups;
      } else throw new Error("there are not such group");
    } else throw new Error("parameters aren't valid");
  }
  removePupil(groupId, pupilid) {
    if (typeof groupId === "string" && typeof pupilid === "number") {
      if (this.groups.get("id") == groupId) {
        this.groups.clear(groupId);
      } else throw new Error("there are not such group");
    } else throw new Error("parameters aren't valid");
  }
  update(groupId, updated) {
    if (typeof groupId === "string" && typeof updated === "object") {
      if (this.groups.get("id") == groupId) {
        Object.keys(updated).forEach((keys) => {
          let x = keys;
          let y = updated[keys];
          this.groups.set(x, y);
        });
      } else throw new Error("there are not such group");
    } else throw new Error("parameters aren't valid");
  }
  read(groupId) {
    if (typeof groupId === "string") {
      if (this.groups.get("id") == groupId) return {groupId};
      else throw new Error("there are not such group");
      
    } else throw new Error("parameters aren't valid");
    
  }
  readAll(arg) {
    if (arg) throw new Error("you passed parameters!");
    else return Array.from(this.groups); 
  }
}
