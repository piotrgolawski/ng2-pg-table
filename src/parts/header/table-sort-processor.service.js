"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var table_utils_1 = require("../../utils/table.utils");
var TableSortProcessorService = /** @class */ (function () {
    function TableSortProcessorService() {
    }
    TableSortProcessorService.prototype.setItems = function (items) {
        this.items = items;
    };
    TableSortProcessorService.prototype.setTableBroadcaster = function (tableBroadcaster) {
        if (!this.tableBroadcaster) {
            this.tableBroadcaster = tableBroadcaster;
        }
    };
    TableSortProcessorService.prototype.setSortByObjectPath = function (objectPath, order) {
        this.tableBroadcaster.onClearOrder(objectPath);
        this.sortList(objectPath, order);
    };
    TableSortProcessorService.prototype.sortList = function (objectPath, order) {
        this.items.sort(table_utils_1.TableUtils.dynamicSortByOrder(objectPath, order));
        this.tableBroadcaster.onTableFiltered(this.items);
    };
    TableSortProcessorService = __decorate([
        core_1.Injectable()
    ], TableSortProcessorService);
    return TableSortProcessorService;
}());
exports.TableSortProcessorService = TableSortProcessorService;
