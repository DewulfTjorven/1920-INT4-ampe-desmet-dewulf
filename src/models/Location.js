import { decorate, observable, action } from "mobx";
import { v4 } from "uuid";

class Location {
  constructor({ id = v4(), name, coordinates, img, ownerId, spotCount, user, trip }) {
    if (!trip) {
      throw new Error("A message must have a trip");
    }
    if (!user) {
      throw new Error("A message must have a user");
    }
    this.id = id;
    this.name = name;
    this.coordinates = coordinates;
    this.img = img;
    this.ownerId = ownerId;
    this.spotCount = spotCount;

    this.trip.linkMessage(this);
    this.user.linkMessage(this);
  }
}

decorate(Location, {
  unread: observable,
  setUnread: action
});

export default Location;
