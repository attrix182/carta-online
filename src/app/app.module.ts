import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CartaComponent } from './pages/carta/carta.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { ItemComponent } from './pages/carta/item/item.component';
import { ItemDetalleComponent } from './pages/carta/item-detalle/item-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [AppComponent, CartaComponent, TopbarComponent, ItemComponent, ItemDetalleComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
