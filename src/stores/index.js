import UiStore from "./UiStore";
import UserStore from "./UserStore";
import TripStore from "./TripStore";

import * as firebase from "firebase/app";

class RootStore {
  constructor() {
    var firebaseConfig = {
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      databaseURL: process.env.REACT_APP_databaseURL,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId
    };
    // Initialize Firebase
    this.firebase = firebase.initializeApp(firebaseConfig);


    this.userStore = new UserStore(this);
    this.tripStore = new TripStore(this);
    this.uiStore = new UiStore(this);
  }
}

export default RootStore;
