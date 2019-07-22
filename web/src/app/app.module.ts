import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCupsComponent } from './view-cups/view-cups.component';
import { environment } from '../environments/environment';

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
    StoreModule.forRoot( { cupsStore: appReducer } ),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

