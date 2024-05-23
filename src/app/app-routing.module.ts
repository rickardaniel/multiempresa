import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/access/access.component';
import { TableroEmpresasComponent } from './components/tablero-empresas/tablero-empresas.component';

const routes: Routes = [
  {
    path:'acceso', component: AccessComponent
  },
  {
    path:'empresas', component: TableroEmpresasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
