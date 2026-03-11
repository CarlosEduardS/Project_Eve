import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Controller } from './components/controller/controller';
import { Info } from './components/info/info';
import { Contato } from './components/contato/contato';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'controller', component: Controller},
    {path: 'info', component: Info},
    {path: 'contato', component: Contato},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
