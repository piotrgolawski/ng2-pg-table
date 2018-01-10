"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var TableFloatingMenuComponent = (function () {
    function TableFloatingMenuComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    TableFloatingMenuComponent.prototype.ngOnInit = function () {
        var that = this;
        if (this.components) {
            this.components.forEach(function (component) {
                that.getComponentByName(component);
            });
        }
    };
    TableFloatingMenuComponent.prototype.getComponentByName = function (component) {
        var factory = this.componentFactoryResolver.resolveComponentFactory(component);
        var instance = this.viewContainerRef.createComponent(factory);
        instance.instance['tableBroadcaster'] = this.tableBroadcaster;
    };
    __decorate([
        core_1.Input()
    ], TableFloatingMenuComponent.prototype, "tableBroadcaster");
    __decorate([
        core_1.Input()
    ], TableFloatingMenuComponent.prototype, "components");
    __decorate([
        core_1.ViewChild('viewContainerRef', { read: core_1.ViewContainerRef })
    ], TableFloatingMenuComponent.prototype, "viewContainerRef");
    TableFloatingMenuComponent = __decorate([
        core_1.Component({
            selector: 'table-floating-menu',
            templateUrl: './table-floating-menu.component.html',
            styleUrls: ['../../../table.component.scss']
        })
    ], TableFloatingMenuComponent);
    return TableFloatingMenuComponent;
}());
exports.TableFloatingMenuComponent = TableFloatingMenuComponent;
