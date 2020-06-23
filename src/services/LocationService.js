import { locationConverter } from "../models/Location";
import { userConverter } from "../models/User";

class LocationService {
    constructor(firebase) {
        this.db = firebase.firestore();
    }

    create = async trip => {
        const tripRef = await this.db.collection("trips")
            .doc();
        await tripRef.withConverter(locationConverter).set
            (trip);
        return tripRef;
    }

    getLocation = async locationId => {
        return await this.db
            .collection("locations")
            .doc(locationId)
            .withConverter(locationConverter)
            .get();
    }

    getAllLocations = async (onChange) => {
        await this.db
            .collection("locations")
            .withConverter(userConverter)
            .onSnapshot(async snapshot => {
                snapshot.docChanges().forEach(async change => {
                    if (change.type === "added") {
                        //Stap 1: Locatie ophalen
                        const locationId = change.doc.ref.id;
                        const location = await this.getLocation(locationId);
                        const locationObj = location.data();

                        onChange(locationObj);
                    }
                });
            });
    }

    addMemberToTrip = async (tripId, member) => {
        console.log(member);
        return await this.db
            .collection("trips")
            .doc(tripId)
            .collection("members")
            .doc()
            .withConverter(userConverter)
            .set(member);
    }

    getMembersFromTrip = async tripId => {
        return await this.db
            .collection("trips")
            .doc(tripId)
            .collection("members")
            .withConverter(userConverter)
            .get();
    }

}

export default LocationService;