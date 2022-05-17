import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './shared/success/success.component';
import { CartaComponent } from './pages/carta/carta.component';

const routes: Routes = [
  { path: '', component: CartaComponent },
  { path: 'success', component:SuccessComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
