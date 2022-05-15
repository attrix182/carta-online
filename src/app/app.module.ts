import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartaComponent } from './pages/carta/carta.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { ItemComponent } from './pages/carta/item/item.component';

@NgModule({
  declarations: [AppComponent, CartaComponent, TopbarComponent, ItemComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
