const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  dashboardHome: "/dashboard/home",
  dashboardTrips: "/dashboard/trips",
  dashboardTripDetail: { path: "/dashboard/trip/:id", to: "/dashboard/trip/" },
  dashboardMap: "/dashboard/map",
  dashboardCockpit: "/dashboard/cockpit",
  create: "/createtrip",
  createLocation: { path: "/createtrip/location/:id", to: "/createtrip/location/" },
  create1: "/createtrip/options",
  create2: "/createtrip/flighttime",
  create3: "/createtrip/completed",
  login: "/login",
  register: "/register",
  registerPilot: "/registerpilot",
  certificate: "/certificate",
  dashboardProfile: { path: "/dashboard/profile", to: "/dashboard/profile" }
};

export { ROUTES };
