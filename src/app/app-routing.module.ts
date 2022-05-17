import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './shared/success/success.component';
import { CartaComponent } from './pages/carta/carta.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  { path: '', component: CartaComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'success', component:SuccessComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
