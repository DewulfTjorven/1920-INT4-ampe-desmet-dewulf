import { v4 } from "uuid";

class User {
  constructor({ id = v4(), name, isPilot = "false", store, avatar = "", email, password }) {
    this.id = id;
    this.name = name;
    this.isPilot = isPilot;

    this.trips = [];

    this.avatar = avatar;
    if (!avatar) {
      this.avatar = `https://avatars.dicebear.com/v2/avataaars/${this.id}.svg`;
    }

    if (!store) {
      throw new Error("voorzie een store");
    }
    this.store = store;
    this.store.addUser(this);

    this.email = email;
    this.password = password;
  }

  //linkMessage(message) {
  //  !this.messages.includes(message) && this.messages.push(message);
  //}

  linkTrip(trip) {
    !this.trips.includes(trip) && this.trips.push(trip);
    !trip.users.includes(this) && trip.linkUser(this);
  }
}

export default User;
