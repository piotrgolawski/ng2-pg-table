"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var table_filter_processor_service_1 = require("./table-filter-processor.service");
var TableFilterComponent = /** @class */ (function () {
    function TableFilterComponent(tableFilterProcessorService) {
        this.tableFilterProcessorService = tableFilterProcessorService;
    }
    TableFilterComponent.prototype.filterData = function (search) {
        this.tableFilterProcessorService.setItems(this.items);
        this.tableFilterProcessorService.setTableBroadcaster(this.tableBroadcaster);
        this.tableFilterProcessorService.setSearchByObjectPath(this.column['objectPath'], search);
    };
    TableFilterComponent.prototype.clearFilter = function () {
        this.search = '';
        this.filterData('');
    };
    __decorate([
        core_1.Input()
    ], TableFilterComponent.prototype, "tableBroadcaster");
    __decorate([
        core_1.Input()
    ], TableFilterComponent.prototype, "column");
    __decorate([
        core_1.Input()
    ], TableFilterComponent.prototype, "filterPlaceholder");
    __decorate([
        core_1.Input()
    ], TableFilterComponent.prototype, "items");
    TableFilterComponent = __decorate([
        core_1.Component({
            selector: '[table-search]',
            templateUrl: './table-filter.component.html',
            providers: [table_filter_processor_service_1.TableFilterProcessorService],
            styleUrls: ['../../table.component.scss']
        })
    ], TableFilterComponent);
    return TableFilterComponent;
}());
exports.TableFilterComponent = TableFilterComponent;
