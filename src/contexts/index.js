import { createContext } from "react";
import RootStore from "../stores";
import User from "../models/User";

const store = new RootStore();

const u1 = new User({
  id: "9969c1fc-0f51-3d3f-b687-d0835a081078",
  name: "Reismannetje",
  store: store.userStore,
  avatar: "https://randomuser.me/api/portraits/women/22.jpg"
});

store.uiStore.setCurrentUser(u1);

window.store = store;

export const storesContext = createContext(store);
