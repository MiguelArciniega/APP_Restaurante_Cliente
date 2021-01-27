import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public platillos = [];
  public platillos_2 = [];
  search: string;

  constructor(private router: Router) {

    this.platillos.push({
      name: 'Enchiladas con pollo',
      image: 'https://placeralplato.com/files/2016/08/Enchiladas-de-pollo-640x480.jpg?width=1200&enable=upscale',
      price: 92.99
    });
    this.platillos.push({
      name: 'Huevos a la Mexicana',
      image: 'https://www.superama.com.mx/views/micrositio/recetas/images/comidamexicana/huevosalamexicana/Web_fotoreceta.jpg',
      price: 52.30
    });
    this.platillos.push({
      name: 'Huevos Divorciados',
      image: 'https://www.superama.com.mx/views/micrositio/recetas/images/comidamexicana/huevos-divorciados/Web_fotoreceta.jpg',
      price: 152.40
    });
    this.platillos.push({
      name: 'Chilaquiles Rojos',
      image: 'https://d37k6lxrz24y4c.cloudfront.net/v2/es-mx/e9dc924f238fa6cc29465942875fe8f0/6703c068-d68c-4c76-80aa-069d69350537-600.png',
      price: 112.23
    });
    this.platillos.push({
      name: 'Chilaquiles Verdes',
      image: 'https://cdn.kiwilimon.com/recetaimagen/28577/thumb400x300-29028.jpg',
      price: 89.99
    });
    this.platillos_2 = this.platillos;
  }

  getAll(): void {
    this.platillos = this.platillos_2;
  }

  detail(platillo: []) {
    const navext: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(platillo)
      }
    };
    this.router.navigate(['/detail'], navext);
  }

  filter(): void {
    this.getAll();
    if (this.search && this.search.trim()) {
      this.platillos = this.platillos.filter((platillo) => {
        return (platillo.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
      });
    }
  }
}
