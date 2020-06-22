import { decorate, observable, action } from "mobx";
import AuthService from "../services/AuthService";

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
    this.authService = new AuthService(this.rootStore.firebase);
  }

  loginUser = async (user) => {
    const result = await this.authService.login(user.email, user.password);
    return result;
  }

  logoutUser = async (user) => {
    //const result = await this.authService.login(user.email, user.password);
    //return result;
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
