import { HeroesService, Heroe } from './../../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroesEncontrados: Heroe[] = [];
  constructor( private _heroeService: HeroesService, private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(terminoBusqueda: string){
    console.log(terminoBusqueda);
    this.router.navigate(["/busqueda", terminoBusqueda]);

    // this.heroesEncontrados = this._heroeService.buscarHeroes(terminoBusqueda);
    // console.log("retorno busqueda :", this.heroesEncontrados );
  }

}
