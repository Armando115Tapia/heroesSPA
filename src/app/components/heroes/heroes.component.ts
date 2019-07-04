import { HeroesService, Heroe } from './../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    // console.log("Los heroes", this.heroes);
  }

  verHeroe(idx: number){
    this._router.navigate(['/heroe', idx]);
  }

}
