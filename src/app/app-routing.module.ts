import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
  },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: '**', redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
