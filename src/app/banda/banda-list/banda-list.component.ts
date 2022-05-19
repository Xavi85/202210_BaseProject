import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<Banda> = [];
  memebersAverage: number = 0;

  constructor(private bandaService: BandaService) { }

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
      this.memebersAverage = this.getAvgBandMembers(bandas);
    });
  }

  getAvgBandMembers(bandas: Banda[]): number {
    let avgBandMembers: number = 0;
    bandas.forEach((banda) => avgBandMembers += banda.numberOfMembers);
    return Math.round(avgBandMembers/bandas.length);
  }

  ngOnInit() {
    this.getBandas();
  }

}
