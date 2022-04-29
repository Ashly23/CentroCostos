import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ModalEditarComponent } from './vista/modal-editar/modal-editar.component';
import { ModalFactorComponent } from './vista/modal-factor/modal-factor.component';
import { ModalMedidorComponent } from './vista/modal-medidor/modal-medidor.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/menu' },
  { path: 'menu', component: MenuComponent,
    children:[
      { path:'vista',component:VistaComponent, 
    children: [
        { path: 'modal-factor', component: ModalFactorComponent },
        { path: 'modal-medidor', component: ModalMedidorComponent},
        { path: 'modal-editar', component: ModalEditarComponent }
    ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
