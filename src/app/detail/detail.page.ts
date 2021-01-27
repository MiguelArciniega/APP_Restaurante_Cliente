import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platillo } from '../models/platillo';
import { PlatilloService } from '../services/platillo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public platillo: Platillo;
  public myForm: FormGroup;

  constructor(private actroute: ActivatedRoute, private platillosService: PlatilloService, private fb: FormBuilder) {
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
    this.myForm = this.fb.group({ cantidad: 0 });
    this.cleanInputs();
  }

  create() {
    this.platillosService.addPlatillo(this.platillo, this.myForm.controls.cantidad.value);
    this.cleanInputs();
    alert('Pedido agregado con exito');
  }

  private cleanInputs(): void {
    this.myForm = this.fb.group({
      cantidad: [1, Validators.compose([Validators.required, Validators.pattern(/^-?([1-9]\d*)?$/)])]
    });
  }
}