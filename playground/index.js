"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/**
 * This is only for local test
 */
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
var src_1 = require("../src");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_2.Component({
            selector: 'app',
            template: "<sample-component></sample-component>"
        })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [AppComponent],
            declarations: [AppComponent],
            imports: [platform_browser_1.BrowserModule, src_1.Ng2PgTableModule]
        })
    ], AppModule);
    return AppModule;
}());
// platformBrowserDynamic().bootstrapModule(AppModule);
