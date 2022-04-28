import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/menu' },
  { path: 'menu', component: MenuComponent,
    children:[
      { path:'vista',component:VistaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
