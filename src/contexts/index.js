import { createContext } from "react";
import RootStore from "../stores";
import User from "../models/User";
import Trip from "../models/Trip";
import Location from "../models/Location";

const store = new RootStore();

const u1 = new User({
  id: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  name: "Reismannetje",
  store: store.userStore,
  avatar: "https://randomuser.me/api/portraits/women/22.jpg"
});

const tripsje = new Trip({
  id: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  name: "Reismannetje's trip",
  date: "2020-07-01",
  tripCode: "10-047-AB",
  flightTime: "25",
  locationId: "3d3f-b687-d0835a081078",
  store: store.tripStore,
  ownerId: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  pilotId: "9969c1fc-0f51-3d3f-b687-d0835a081078"
});
const tripsje2 = new Trip({
  id: "9969c1fc-0f51-3d3f-b687-d0835a081079",
  name: "Reisman",
  date: "2020-07-01",
  tripCode: "10-047-AB",
  flightTime: "25",
  locationId: "3d3f-b687-d0835a081078",
  store: store.tripStore,
  ownerId: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  pilotId: "9969c1fc-0f51-3d3f-b687-d0835a081078"
});
const tripsje3 = new Trip({
  id: "9969c1fc-0f51-3d3f-b687-d0835a081074",
  name: "Broer",
  date: "2020-07-01",
  tripCode: "10-047-AB",
  flightTime: "25",
  locationId: "3d3f-b687-d0835a081078",
  store: store.tripStore,
  ownerId: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  pilotId: "9969c1fc-0f51-3d3f-b687-d0835a081078"
});
const tripsje4 = new Trip({
  id: "Koeken",
  name: "Reismannetje's trip",
  date: "2020-07-01",
  tripCode: "10-047-AB",
  flightTime: "25",
  locationId: "3d3f-b687-d0835a081078",
  store: store.tripStore,
  ownerId: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  pilotId: "9969c1fc-0f51-3d3f-b687-d0835a081078"
});

const locationtje = new Location({
  id: "3d3f-b687-d0835a081078",
  name: "Locatietje",
  ownerId: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  spotCount: "30",
  radius: "10",
  trip: tripsje,
  coordinates: "52°22'38.155 N4°52'14.976 E"
})

store.uiStore.setCurrentUser(u1);

store.userStore.addUser(u1);

store.tripStore.addTrip(tripsje);
store.tripStore.addTrip(tripsje2);
store.tripStore.addTrip(tripsje3);
store.tripStore.addTrip(tripsje4);
store.tripStore.addUser(u1, tripsje);
store.tripStore.addUser(u1, tripsje2);
store.tripStore.addUser(u1, tripsje3);
store.tripStore.addUser(u1, tripsje4);

store.locationStore.addLocation(locationtje);

console.log(store.locationStore.locations)

window.store = store;

export const storesContext = createContext(store);
