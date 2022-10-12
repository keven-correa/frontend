import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren: ()=> import('./login/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'medico-general',
    loadChildren:()=>import('./medicoGeneral/medico-general/medico-general.module').then(m=>m.MedicoGeneralModule)
  },
  {
    path:'terapia-fisica',
    loadChildren:()=>import('./terapia-fisica/terapia-fisica.module').then(m=>m.TerapiaFisicaModule)
  },
  {
    path:'secretaria',
    loadChildren:()=>import('./secretaria/secretaria.module').then(m=>m.SecretariaModule)
  },
  {
    path:'**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
