import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NewsComponent } from './news/news.component';

import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@NgModule({ 
  declarations: [
    AppComponent,
    NewsComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent , NewsComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(NewsComponent, { injector });
    customElements.define('news-widget', el);
  }
  ngDoBootstrap() {}

 }
