import UiStore from "./UiStore";
import UserStore from "./UserStore";
import GroupStore from "./GroupStore";

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.groupStore = new GroupStore(this);
    this.uiStore = new UiStore(this);
  }
}

export default RootStore;
