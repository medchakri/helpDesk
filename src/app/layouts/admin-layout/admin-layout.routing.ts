import { Routes } from "@angular/router";
import { ProjetsComponent } from "src/app/pages/projets/projets.component";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "projets", component: ProjetsComponent },
  // { path: "rtl", component: RtlComponent }
];
