import { Component, OnInit } from '@angular/core';

interface MenuItem {
  path: string,
  text: string
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `]
})
export class MenuComponent {

  menu: MenuItem[] = [
    { path: "/graficos/barras", text: "Barras" },
    { path: "/graficos/barras-dobles", text: "Barras dobles" },
    { path: "/graficos/dona", text: "Dona" },
    { path: "/graficos/dona-http", text: "Dona http" },
  ];



}
