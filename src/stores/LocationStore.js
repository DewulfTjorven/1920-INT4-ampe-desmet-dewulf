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

    getAllLocations = async () => {
        const result = await this.locationService.getAllLocations(this.onLocationsChanged);
        console.log(result);
    }

    createLocation = async location => {
        //
    }

    getLocationById = id => this.locations.find(location => location.id === id);

    addLocation = location => {
        this.locations.push(location);
    };

    empty() {
        this.trips = [];
    }

}
decorate(LocationStore, {
    locations: observable,
    empty: action,
    addLocation: action,
    createLocation: action,
    getLocations: action,
});
export default LocationStore;
