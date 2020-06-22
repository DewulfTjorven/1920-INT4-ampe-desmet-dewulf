const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  dashboardHome: "/dashboard/home",
  dashboardTrips: "/dashboard/trips",
  dashboardTripDetail: { path: "/dashboard/trip/:id", to: "/dashboard/trip/" },
  dashboardMap: "/dashboard/map",
  dashboardCockpit: "/dashboard/cockpit",
  create1: "/create/1",
  create2: "/create/2",
  create3: "/create/3",
  login: "/login",
  register: "/register",
  registerPilot: "/registerpilot",
  dashboardProfile: { path: "/dashboard/profile", to: "/dashboard/profile" }
};

export { ROUTES };
