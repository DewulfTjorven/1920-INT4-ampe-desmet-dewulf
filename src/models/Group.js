import { decorate, observable, action, computed } from "mobx";
import { v4 } from "uuid";

class Group {
  constructor({ id = v4(), name, messages = [], pic = "", users = [], store }) {
    this.id = id;
    this.name = name;
    this.messages = messages;
    this.pic = pic;
    if (!pic) {
      this.pic = `https://avatars.dicebear.com/v2/identicon/${this.id}.svg`;
    }
    this.users = users;
    if (!store) {
      throw new Error("voorzie een store");
    }
    this.store = store;
    this.store.addGroup(this);
    this.users.forEach(user => {
      user.linkGroup(this);
    });
  }

  linkMessage(message) {
    !this.messages.includes(message) && this.messages.push(message);
  }

  linkUser(user) {
    !this.users.includes(user) && this.users.push(user);
    !user.groups.includes(user) && user.linkGroup(this);
  }
}

decorate(Group, {
  messages: observable,
  users: observable,
  addMessage: action,
  unreadLength: computed,
  lastMessageContent: computed,
  linkUser: action,
  linkMessage: action
});

export default Group;
