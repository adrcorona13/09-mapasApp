import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
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
        width:400px
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {


  @ViewChild('mapa')
  mapContainer!: ElementRef;

  map!: mapboxgl.Map;

  zoomLevel: number = 10;

  center: [number, number] = [-99.1240, 19.4426];

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
    });

    this.map.on('zoom', (ev) => {
      this.zoomLevel = this.map.getZoom();
    })

    this.map.on('zoomend', (ev) => {
      if (this.map.getZoom() > 18) {
        this.map.zoomTo(18);
      }
    })

    this.map.on('move', (ev) => {
      const target = ev.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    })
  }

  ngOnDestroy(): void {
    this.map.off('zoom', () => {});
    this.map.off('zoomend', () => {});
    this.map.off('move', () => {});
    
  }

  zoom(inOrOut: string) {

    if (inOrOut === "in") {
      this.map.zoomIn();
    } else {
      this.map.zoomOut();
    }
  }

  zoomCambio(valor: string) {
    this.map.zoomTo(Number(valor));
  }
}
