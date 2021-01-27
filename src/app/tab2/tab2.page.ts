import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pedido } from '../models/pedido';
import { PedidosService } from '../services/pedidos.service';
import { Platillo } from '../models/platillo';
import { PlatilloService } from "../services/platillo.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  platillos: Platillo[];
  public pedido: Pedido;
  public myForm: FormGroup;

  constructor(private pedidosService: PedidosService, private platillosService: PlatilloService, private fb: FormBuilder) {
    this.platillos = platillosService.platillos.slice(1);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      mesa: [0],
      pedidos: [{}],
      cantidad: [{}],
      sugerencias: [''],
      active: [true]
    });
    this.cleanInputs();
  }

  create() {
    this.pedido = {
      mesa: this.myForm.controls.mesa.value,
      pedidos: this.platillosService.name,
      cantidad: [1, 2, 3, 4, 5],
      sugerencias: this.myForm.controls.sugerencias.value,
      active: true
    };
    this.pedidosService.createPedido(this.pedido);
    this.cleanInputs();
    alert('Pedido agregado con exito');
  }

  private cleanInputs(): void {
    this.myForm = this.fb.group({
      mesa: [0, Validators.compose([Validators.required, Validators.pattern(/^-?([1-9]\d*)?$/)])],
      sugerencias: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])]
    });
  }

}
