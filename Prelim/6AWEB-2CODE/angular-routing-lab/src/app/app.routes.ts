import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Directive } from '@angular/core';
import { DataBinding } from './data-binding/data-binding';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'directives', component: Directive},
  { path: 'data-binding', component: DataBinding}
];
