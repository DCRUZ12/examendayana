import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule, IonicSlides } from '@ionic/angular';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-shet',
    loadChildren: () => import('./pages/action-shet/action-shet.module').then( m => m.ActionShetPageModule)
  },
  {
    path: 'leccion',
    loadChildren: () => import('./pages/leccion/leccion.module').then( m => m.LeccionPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    , IonicModule]
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
