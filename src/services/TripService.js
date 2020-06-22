import { tripConverter } from "../models/Trip";
import { userConverter } from "../models/User";

class TripService {
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

}

export default TripService;