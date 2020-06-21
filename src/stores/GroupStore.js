import { decorate, observable, action, computed } from "mobx";

class GroupStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.groups = [];
  }

  getGroupById = id => this.groups.find(group => group.id === id);

  addGroup = group => {
    this.groups.push(group);
  };

  addUser = (user, group) => {
    group.linkUser(user);
  };

  empty() {
    this.groups = [];
  }
}
decorate(GroupStore, {
  groups: observable,
  empty: action,
  addGroup: action,
  addUser: action,
  unreadLength: computed
});
export default GroupStore;
