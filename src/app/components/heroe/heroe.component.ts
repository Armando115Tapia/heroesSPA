import { HeroesService } from './../../servicios/heroes.service';
import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private _activatedRouter: ActivatedRoute, private _heroeService: HeroesService) {

    this._activatedRouter.params.subscribe( params => {
          //console.log(params['id']);
          this.heroe = this._heroeService.getHeroe(params['id']);
    });

    // console.log(" El heroe seleccionado es: ",this.heroe);
  }



}
