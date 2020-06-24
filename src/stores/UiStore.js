import { decorate, observable, action } from "mobx";
import AuthService from "../services/AuthService";
import User from "../models/User";

class UiStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.currentUser = undefined;
    this.authService = new AuthService(this.rootStore.firebase, this.onAuthStateChanged);
  }

  onAuthStateChanged = user => {
    if (user) {
      console.log(`user is ingelogd ${user.email}`);

      this.setCurrentUser(new User({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        store: this.rootStore.userStore,
        avatar: user.photoURL
      }));

      // Trips ophalen voor ingelogde user
      this.rootStore.tripStore.getTrips();

      // Spots ophalen
      this.rootStore.locationStore.getAllLocations();
      console.log(this.rootStore.locationStore.locations);



    } else {
      console.log(`user is uitgelogd`);
      this.rootStore.tripStore.empty();
      this.setCurrentUser(undefined);
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
    const result = await this.authService.register(user.name, user.avatar, user.email, user.password);
    const registeredUser = new User({
      id: result.uid,
      name: result.displayName,
      avatar: result.photoURL,
      store: this.rootStore.userStore,
      email: result.email,
      isPilot: result.isPilot
    })
    if (result) {
      //User toevoegen aan user collectie
      console.log(user);
      this.rootStore.userStore.createUser(registeredUser);
    }
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
