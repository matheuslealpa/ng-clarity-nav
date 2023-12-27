import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home-routing').then(r => r.HOME_ROUTING)
  },
  {
    path: 'rel1',
    loadChildren: () => import('./pages/rel1/rel1-routing').then(r => r.REL_ROUTING)
  },
  {
    path: 'conf1',
    loadChildren: () => import('./pages/conf1/conf1.routing').then(r => r.CONF1_ROUTING)
  },
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
