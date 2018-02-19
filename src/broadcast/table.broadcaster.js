"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var TableBroadcaster = /** @class */ (function () {
    function TableBroadcaster() {
        this.tableFiltered = new rxjs_1.Subject();
        this.clearOrder = new rxjs_1.Subject();
        this.recalculatePages = new rxjs_1.Subject();
        this.mouseOverRow = new rxjs_1.Subject();
        this.rowSelected = new rxjs_1.Subject();
        this.rowUnSelected = new rxjs_1.Subject();
    }
    TableBroadcaster.prototype.onTableFiltered = function (objects) {
        this.tableFiltered.next(objects);
    };
    TableBroadcaster.prototype.onClearOrder = function (excludedObjectPath) {
        this.clearOrder.next(excludedObjectPath);
    };
    TableBroadcaster.prototype.onRecalculatePages = function () {
        this.recalculatePages.next();
    };
    TableBroadcaster.prototype.onMouseOverRow = function (object) {
        this.mouseOverRow.next(object);
    };
    TableBroadcaster.prototype.onRowSelected = function (object) {
        this.rowSelected.next(object);
    };
    TableBroadcaster.prototype.onRowUnSelected = function (object) {
        this.rowUnSelected.next(object);
    };
    TableBroadcaster = __decorate([
        core_1.Injectable()
    ], TableBroadcaster);
    return TableBroadcaster;
}());
exports.TableBroadcaster = TableBroadcaster;
