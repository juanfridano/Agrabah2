import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RecipieComponent } from './components/recipie.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipieComponent    
  ],
  imports: [
      BrowserModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
