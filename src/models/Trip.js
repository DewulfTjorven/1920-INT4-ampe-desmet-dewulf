import { decorate, observable, action } from "mobx";
import { v4 } from "uuid";

class Trip {
  constructor({ id = v4(), name, date, tripCode, flightTime, locationId, spots = [], users = [], store, pilotId, ownerId }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.tripCode = tripCode;
    this.flightTime = flightTime;
    this.locationId = locationId;
    this.ownerId = ownerId;
    this.pilotId = pilotId;

    this.spots = spots;

    this.users = users;

    /*if (!store) {
      throw new Error("voorzie een store");
    }
    this.store = store;
    this.store.addTrip(this);

    this.users.forEach(user => {
      user.linkTrip(this);
    });*/
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

/* tripConverter */
const tripConverter = {
  toFirestore: function (trip) {
    return {
      name: trip.name,
      date: trip.date,
      flightTime: trip.flightTime,
      locationId: trip.locationId,
      ownerId: trip.ownerId
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new Trip({
      id: snapshot.id,
      name: data.name,
      date: data.date,
      flightTime: data.flightTime,
      locationId: data.locationId,
      ownerId: data.ownerId
    })
  }
}

export { tripConverter };

export default Trip;
