/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Ng2PgTableModule} from '../src';


@Component({
  selector: 'app',
  template: `<sample-component></sample-component>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, Ng2PgTableModule ]
})
class AppModule {}

// platformBrowserDynamic().bootstrapModule(AppModule);
