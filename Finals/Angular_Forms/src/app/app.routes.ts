import { Routes } from '@angular/router';
import { TemplateDemoComponent } from './template-demo/template-demo';
// import { ReactiveDemoComponent } from './reactive-demo/reactive-demo';

export const routes: Routes = [
  { path: 'template', component: TemplateDemoComponent },
  // { path: 'reactive', component: ReactiveDemoComponent },
  { path: '', redirectTo: '/template', pathMatch: 'full' }
];
