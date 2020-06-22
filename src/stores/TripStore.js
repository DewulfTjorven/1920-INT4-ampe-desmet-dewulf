import { decorate, observable, action } from "mobx";

class TripStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.trips = [];
  }

  getTripById = id => this.trips.find(trip => trip.id === id);



  searchTrip = trip => {
    this.trips.forEach(trip => {

    });
  };

  addTrip = trip => {
    this.trips.push(trip);
  };

  addUser = (user, trip) => {
    trip.linkUser(user);
  };

  empty() {
    this.trips = [];
  }

  get unreadLength() {
    return this.trips.reduce(
      (total, trip) => (total += trip.unreadLength),
      0
    );
  }

}
decorate(TripStore, {
  trips: observable,
  empty: action,
  addGroup: action,
  addUser: action,
});
export default TripStore;
