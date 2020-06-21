const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  dashboardHome: "/dashboard/home",
  dashboardTrips: "/dashboard/trips",
  dashboardTripDetail: { path: "/dashboard/trip/:id", to: "/dashboard/trip/" },
  dashboardMap: "/dashboard/map",
  dashboardCockpit: "/dashboard/cockpit",
  login: "/login",
  register: "/register",
  dashboardProfile: { path: "/dashboard/profile", to: "/dashboard/profile" }
};

export { ROUTES };
