import { decorate, observable, action } from "mobx";
import LocationService from "../services/LocationService";

class LocationStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.locationService = new LocationService(this.rootStore.firebase);
        this.locations = [];
    }

    onLocationsChanged = location => {
        this.addLocation(location);
    }

    getLocations = async () => {
        //
    }

    createLocation = async location => {
        //
    }

    addLocation = location => {
        this.locations.push(location);
    };

    addUser = (user, location) => {
        location.linkUser(user);
    };

    empty() {
        this.trips = [];
    }

}
decorate(LocationStore, {
    trips: observable,
    empty: action,
    addTrip: action,
    createTrip: action,
    getTripById: action,
    getTrips: action,
});
export default LocationStore;
