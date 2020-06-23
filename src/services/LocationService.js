//import { locationConverter } from "../models/Location";
import { userConverter } from "../models/User";

class LocationService {
    constructor(firebase) {
        this.db = firebase.firestore();
    }

    create = async trip => {
        const tripRef = await this.db.collection("trips")
            .doc();
        await tripRef.withConverter(tripConverter).set
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

    getTripsForMember = async (userId, onChange) => {
        await this.db
            .collectionGroup("members")
            .where("userId", "==", userId)
            .withConverter(userConverter)
            .onSnapshot(async snapshot => {
                snapshot.docChanges().forEach(async change => {
                    if (change.type === "added") {
                        //Stap 1: Trip ophalen
                        const tripId = change.doc.ref.parent.parent.id;
                        const trip = await this.getTrip(tripId);
                        const tripObj = trip.data();

                        //Stap 2: Members ophalen van trip
                        const members = await this.getMembersFromTrip(tripId);

                        //Stap 3: Linken van members en groups
                        for (const member of members.docs) {
                            const memberObj = member.data();
                            memberObj.linkTrip(tripObj);
                            tripObj.linkUser(memberObj);
                        }

                        onChange(tripObj);
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