"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var TablePaginationComponent = (function () {
    function TablePaginationComponent(pagerService) {
        this.pagerService = pagerService;
        this.itemsPaged = new core_1.EventEmitter();
        this.pager = {};
    }
    TablePaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableBroadcaster.recalculatePages
            .subscribe(function () {
            _this.recalculatePages();
        });
        this.setPage(1);
    };
    TablePaginationComponent.prototype.ngOnChanges = function () {
        this.recalculatePages();
    };
    TablePaginationComponent.prototype.recalculatePages = function () {
        this.setPage(this.pager.currentPage);
    };
    TablePaginationComponent.prototype.setPage = function (page) {
        if (this.items) {
            this.pager = this.pagerService.getPager(Object.keys(this.items).length, page, this.paginationLimit);
            this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
            this.itemsPaged.emit(this.pagedItems);
        }
    };
    __decorate([
        core_1.Input()
    ], TablePaginationComponent.prototype, "tableBroadcaster");
    __decorate([
        core_1.Input()
    ], TablePaginationComponent.prototype, "items");
    __decorate([
        core_1.Input()
    ], TablePaginationComponent.prototype, "paginationLimit");
    __decorate([
        core_1.Output()
    ], TablePaginationComponent.prototype, "itemsPaged");
    TablePaginationComponent = __decorate([
        core_1.Component({
            selector: 'table-pagination',
            templateUrl: './table-pagination.component.html',
            styleUrls: ['../../table.component.scss']
        })
    ], TablePaginationComponent);
    return TablePaginationComponent;
}());
exports.TablePaginationComponent = TablePaginationComponent;
