import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platillo } from '../models/platillo';

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {

  public name: string[];
  public platillos: Platillo[];

  constructor() {
    this.name = [];
    this.platillos = [{
      name: "",
      image: "",
      price: 0
    }];
  }

  addPlatillo(platillo: Platillo) {
    this.name.push(platillo.name);
    this.platillos.push({
      name: platillo.name,
      image: platillo.image,
      price: platillo.price
    });
    console.log(this.name);
    console.log(this.platillos);
  }
}
