import { decorate, observable, action } from "mobx";
import UserService from "../services/UserService";

class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.userService = new UserService(this.rootStore.firebase);
    this.users = [];
  }

  createUser = async user => {
    return await this.userService.create(user);
  }

  addUser = user => {
    this.users.push(user);
  };

  empty() {
    this.users = [];
  }

  searchUser = search =>
    this.users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

  getUserById = id => this.users.find(user => user.id === id);
}

decorate(UserStore, {
  users: observable,
  empty: action,
  addUser: action
});

export default UserStore;
