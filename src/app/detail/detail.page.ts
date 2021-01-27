import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platillo } from '../models/platillo';
import { PlatilloService } from "../services/platillo.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public platillo: Platillo;

  constructor(private actroute: ActivatedRoute, private platillosService: PlatilloService) {
    this.actroute.queryParams.subscribe(
      params => {
        if (params && params.special) {
          this.platillo = JSON.parse(params.special) as Platillo;
          console.log(this.platillo);
        }
      }
    );
  }

  ngOnInit() {
  }

  create() {
    this.platillosService.addPlatillo(this.platillo);
    alert('Pedido agregado con exito');
  }
}