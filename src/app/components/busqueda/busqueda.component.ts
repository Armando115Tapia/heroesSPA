import { HeroesService, Heroe } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroesEncontrados: Heroe[] = [];
  termino: string = '';

  constructor(private _heroeServicio: HeroesService, private _activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRouter.params.subscribe(params =>
      {
        this.termino = params['termino'] ;
        return this.heroesEncontrados = this._heroeServicio.buscarHeroes(params['termino'])
      });

    // this.heroesEncontrados = this._heroeServicio.buscarHeroes('Hul');

  }

}
