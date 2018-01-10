"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var table_sort_processor_service_1 = require("./table-sort-processor.service");
var TableHeaderComponent = (function () {
    function TableHeaderComponent(tableSortProcessorService) {
        this.tableSortProcessorService = tableSortProcessorService;
        this.orderState = null;
    }
    TableHeaderComponent.prototype.onClick = function () {
        this.orderState = this.getProperActualSortingDirection();
        this.tableSortProcessorService.setItems(this.items);
        this.tableSortProcessorService.setTableBroadcaster(this.tableBroadcaster);
        this.tableSortProcessorService.setSortByObjectPath(this.objectPath, this.orderState);
    };
    ;
    TableHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableBroadcaster.clearOrder
            .filter(function (evt) { return evt != null; })
            .subscribe(function (excludedObjectPath) {
            if (!excludedObjectPath || _this.objectPath !== excludedObjectPath) {
                _this.orderState = null;
            }
        });
    };
    TableHeaderComponent.prototype.getProperActualSortingDirection = function () {
        var orderState = 1;
        switch (this.orderState) {
            case 1: {
                orderState = -1;
                break;
            }
            case -1: {
                orderState = null;
                break;
            }
        }
        return orderState;
    };
    __decorate([
        core_1.Input()
    ], TableHeaderComponent.prototype, "tableBroadcaster");
    __decorate([
        core_1.Input()
    ], TableHeaderComponent.prototype, "modelColumnName");
    __decorate([
        core_1.Input()
    ], TableHeaderComponent.prototype, "objectPath");
    __decorate([
        core_1.Input()
    ], TableHeaderComponent.prototype, "items");
    __decorate([
        core_1.HostListener('click')
    ], TableHeaderComponent.prototype, "onClick");
    TableHeaderComponent = __decorate([
        core_1.Component({
            selector: '[table-column]',
            templateUrl: './table-header.component.html',
            styleUrls: ['../../table.component.scss'],
            providers: [table_sort_processor_service_1.TableSortProcessorService]
        })
    ], TableHeaderComponent);
    return TableHeaderComponent;
}());
exports.TableHeaderComponent = TableHeaderComponent;
