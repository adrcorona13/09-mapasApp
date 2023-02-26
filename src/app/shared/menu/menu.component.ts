import { Component } from '@angular/core';

interface MenuItem{
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  menu: MenuItem[] = [
    { texto: 'Fullscreen', ruta: 'mapas/fullscreen'},
    { texto: 'Zoom Range', ruta: 'mapas/zoom-range'},
    { texto: 'Marcadores', ruta: 'mapas/marcadores'},
    { texto: 'Propiedades', ruta: 'mapas/propiedades'},
  ]
}
