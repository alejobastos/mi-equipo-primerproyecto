import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './jugador/index/index.component';

import {AddComponent as OrderAddComponent} from './orders/add/add.component';

import{JugadorModule} from './jugador/jugador.module';
import{OrdersModule} from './orders/orders.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

const appRoutes: Routes = [
{path: 'jugador/index', component: IndexComponent},
{path: 'orders/add', component: OrderAddComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    JugadorModule,
    OrdersModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
