import { decorate, observable, action } from "mobx";
import TripService from "../services/TripService";
import { getCurrentTimeStamp } from "./"

class TripStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.tripService = new TripService(this.rootStore.firebase);
    this.trips = [];
  }

  getTripById = id => this.trips.find(trip => trip.id === id);

  createTrip = async trip => {
    // Trip date voorlopig ingesteld op huidige datum
    trip.date = getCurrentTimeStamp();

    // Trip owner instellen
    trip.ownerId = this.rootStore.uiStore.currentUser.id;

    //  Create  trip in Firestore
    const newTripRef = await this.tripService.create(trip);

    // Id instellen van Firebase document id
    trip.id = newTripRef.id;

    // Huidige gebruiker toevoegen als member van trip
    await this.TripService.addMemberToTrip(trip.id, this.rootStore.uiStore.currentUser);

    trip.linkUser(this.rootStore.uiStore.currentUser);
  }

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
