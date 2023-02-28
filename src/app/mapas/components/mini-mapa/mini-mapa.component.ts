import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [`
    div {
      width: 100%;
      height: 150px;
      margin: 0px;
      background-color: red
    }
  `]
})
export class MiniMapaComponent implements AfterViewInit {
  
  @Input() lngLat: [number, number] = [0,0];
  @ViewChild('mapa') mapContainer!: ElementRef;
  
  ngAfterViewInit(): void {
    console.log('entro');
    
    const map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });

    new mapboxgl.Marker()
      .setLngLat(this.lngLat)
      .addTo(map);
  }
  
}
