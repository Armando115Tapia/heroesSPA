import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'busqueda/:termino', component: BusquedaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
