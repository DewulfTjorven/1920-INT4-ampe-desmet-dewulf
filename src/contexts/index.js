import { createContext } from "react";
import RootStore from "../stores";
import User from "../models/User";
import Trip from "../models/Trip";

const store = new RootStore();

const u1 = new User({
  id: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  name: "Reismannetje",
  store: store.userStore,
  avatar: "https://randomuser.me/api/portraits/women/22.jpg"
});

new Trip({
  id: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  name: "Reismannetje's trip",
  date: "17 / 11 / 20",
  tripCode: "10-047-AB",
  flightTime: "25:00",
  store: store.tripStore,
});

store.uiStore.setCurrentUser(u1);

window.store = store;

export const storesContext = createContext(store);
