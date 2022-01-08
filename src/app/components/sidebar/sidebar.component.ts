import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [

  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" 
  },
  {
    path: "/projets",
    title: "Projects",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/taches",
    title: "Taches",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  {
    path: "/tickets",
    title: "Tickets",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
