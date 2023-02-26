import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container{
        height: 100%;
        width: 100%;
      }

      .row{
        background-color: white;
        position: fixed;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        border-radius: 5px;
        z-index: 9999;
      }
    `
  ]
})
export class ZoomRangeComponent implements OnInit{
  
  ngOnInit(): void {
    const map = new mapboxgl.Map({
      container: 'mapa', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-99.1240, 19.4426], // starting position [lng, lat]
      zoom: 17, // starting zoom
    });
  }

}
