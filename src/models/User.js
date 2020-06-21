import { v4 } from "uuid";

class User {
  constructor({ id = v4(), name, store, avatar = "" }) {
    this.id = id;
    this.name = name;

    //this.messages = [];
    this.trips = [];

    //this.groups = [];

    this.avatar = avatar;
    if (!avatar) {
      this.avatar = `https://avatars.dicebear.com/v2/avataaars/${this.id}.svg`;
    }

    if (!store) {
      throw new Error("voorzie een store");
    }
    this.store = store;
    this.store.addUser(this);
  }

  //linkMessage(message) {
  //  !this.messages.includes(message) && this.messages.push(message);
  //}

  //linkGroup(group) {
  //  !this.groups.includes(group) && this.groups.push(group);
  //  !group.users.includes(this) && group.linkUser(this);
  //}
}

export default User;
