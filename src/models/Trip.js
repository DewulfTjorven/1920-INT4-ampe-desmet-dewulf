import { decorate, observable, action } from "mobx";
import { v4 } from "uuid";

class Trip {
  constructor({ id = v4(), name, date, tripCode, flightTime, spots = [], users = [], store }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.tripCode = tripCode;
    this.flightTime = flightTime;

    this.spots = spots;

    this.users = users;

    if (!store) {
      throw new Error("voorzie een store");
    }
    this.store = store;
    this.store.addTrip(this);

    this.users.forEach(user => {
      user.linkTrip(this);
    });
  }

  //linkMessage(message) {
  //  !this.messages.includes(message) && this.messages.push(message);
  //}

  linkUser(user) {
    !this.users.includes(user) && this.users.push(user);
    !user.trips.includes(user) && user.linkTrip(this);
  }

}

decorate(Trip, {
  messages: observable,
  users: observable,
  addMessage: action,
  linkUser: action,
  linkMessage: action
});

export default Trip;
