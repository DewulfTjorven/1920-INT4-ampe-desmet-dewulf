const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  dashboardHome: "/dashboard/home",
  dashboardTrips: "/dashboard/trips",
  dashboardTripDetail: { path: "/dashboard/trip/:id", to: "/dashboard/trip/" },
  dashboardMap: "/dashboard/map",
  dashboardCockpit: "/dashboard/cockpit",
  addgroup: "/addgroup"
};

export { ROUTES };
