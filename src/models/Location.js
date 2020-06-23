import { decorate, observable, action } from "mobx";
import { v4 } from "uuid";

class Location {
  constructor({ id = v4(), name, coordinates, img, ownerId, spotCount, user, trip, radius }) {
    if (!ownerId) {
      throw new Error("A location must have an owner");
    }
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
    this.img = img;
    this.ownerId = ownerId;
    this.spotCount = spotCount;
    this.radius = radius;

    //this.trip.linkMessage(this);
    //this.user.linkMessage(this);
  }
}

decorate(Location, {
  unread: observable,
  setUnread: action
});


/* locationConverter */
const locationConverter = {
  toFirestore: function (location) {
    return {
      name: location.name,
      coordinates: location.coordinates,
      img: location.img,
      ownerId: location.ownerId,
      spotCount: location.spotCount,
      radius: location.radius
    };
  },
  fromFirestore: function (snapshot, options) {
    const data = snapshot.data(options);
    return new Location({
      id: snapshot.id,
      name: data.name,
      coordinates: data.coordinates,
      img: data.img,
      ownerId: data.ownerId,
      spotCount: data.spotCount,
      radius: data.radius
    })
  }
}

export { locationConverter };

export default Location;
