import { Routes } from "@angular/router";
import { ProjetsComponent } from "src/app/pages/projets/projets.component";
import { TachesComponent } from "src/app/pages/taches/taches.component";
import { TicketsComponent } from "src/app/pages/tickets/tickets.component";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "taches", component: TachesComponent },
  { path: "projets", component: ProjetsComponent },
  { path: "tickets", component: TicketsComponent },
  // { path: "rtl", component: RtlComponent }
];
