import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProjetsComponent } from "src/app/pages/projets/projets.component";
import { TicketsComponent } from "src/app/pages/tickets/tickets.component";
import { TachesComponent } from "src/app/pages/taches/taches.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    ProjetsComponent,
    TicketsComponent,
    TachesComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
