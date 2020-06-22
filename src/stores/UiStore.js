import { decorate, observable, action } from "mobx";
import AuthService from "../services/AuthService";

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
    this.authService = new AuthService(this.rootStore.firebase, this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    if (user) {
      console.log(`user is ingelogd ${user.email}`);
    } else {
      console.log(`user is uitgelogd`);
    }
  }

  loginUser = async (user) => {
    //Service aanspreken
    const result = await this.authService.login(user.email, user.password);
    return result;
  }

  logoutUser = async () => {
    const result = await this.authService.logout();
    return result;
  }

  registerUser = async (user) => {
    const result = await this.authService.register(user.name, user.email, user.password);
    return result;
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }
}

decorate(UiStore, {
  currentUser: observable,
  setCurrentUser: action
});

export default UiStore;
