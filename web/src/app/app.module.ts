import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCupsComponent } from './view-cups/view-cups.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    ViewCupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot( { cupsStore: appReducer } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

