import UiStore from "./UiStore";
import UserStore from "./UserStore";
import TripStore from "./TripStore";

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.tripStore = new TripStore(this);
    this.uiStore = new UiStore(this);
  }
}

export default RootStore;
