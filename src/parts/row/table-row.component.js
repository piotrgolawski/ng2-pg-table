"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ng2_pg_table_component_1 = require("../../ng2-pg-table.component");
var table_utils_1 = require("../../utils/table.utils");
var TableRowComponent = /** @class */ (function () {
    function TableRowComponent(parent) {
        this.parent = parent;
    }
    TableRowComponent.prototype.onMouseEnter = function ($event) {
        this.elementHtml = table_utils_1.TableUtils.findParentElement($event.target, 'TR', 3);
        this.item['htmlElement'] = table_utils_1.TableUtils.findParentElement($event.target, 'TD', 3);
        this.setProperButtonsPosition();
        this.tableBroadcaster.onMouseOverRow(this.item);
    };
    TableRowComponent.prototype.onClick = function ($event) {
        if (!this.selectMode) {
            return false;
        }
        var rowElement = table_utils_1.TableUtils.findParentElement($event.target, 'TR', 3);
        var isSelected = rowElement.classList.contains('selected');
        this.item['htmlElement'] = rowElement;
        this.item['selected'] = !isSelected;
        if (isSelected) {
            this.tableBroadcaster.onRowUnSelected(this.item);
        }
        else {
            this.tableBroadcaster.onRowSelected(this.item);
        }
    };
    TableRowComponent.prototype.setProperButtonsPosition = function () {
        this.clearAllHoveredElements();
        this.elementHtml.classList.add('hovered');
        var innerConfig = this.parent.innerConfig;
        var left = innerConfig.tableDistanceLeft + (innerConfig.tableWidth / 2) - (innerConfig.tableButtonHolderElementWidth / 2);
        var top = this.elementHtml.getClientRects().item(0).top - (innerConfig.tableButtonHolderElementHeight / 2);
        var floatingMenu = document.getElementById(this.floatingMenuId);
        floatingMenu.style.display = 'inline';
        floatingMenu.style.left = left + 'px';
        floatingMenu.style.top = top + 'px';
    };
    TableRowComponent.prototype.clearAllHoveredElements = function () {
        var allHoveredRows = document.getElementsByClassName('hovered');
        for (var i = 0; i < allHoveredRows.length; i++) {
            allHoveredRows.item(i).classList.remove('hovered');
        }
    };
    __decorate([
        core_1.Input()
    ], TableRowComponent.prototype, "tableBroadcaster");
    __decorate([
        core_1.Input()
    ], TableRowComponent.prototype, "floatingMenuId");
    __decorate([
        core_1.Input()
    ], TableRowComponent.prototype, "item");
    __decorate([
        core_1.Input()
    ], TableRowComponent.prototype, "tableNumber");
    __decorate([
        core_1.Input()
    ], TableRowComponent.prototype, "selectMode");
    __decorate([
        core_1.HostListener('mouseover', ['$event'])
    ], TableRowComponent.prototype, "onMouseEnter");
    __decorate([
        core_1.HostListener('click', ['$event'])
    ], TableRowComponent.prototype, "onClick");
    TableRowComponent = __decorate([
        core_1.Component({
            selector: '[table-row]',
            template: '<ng-content></ng-content>',
            styleUrls: ['../../table.component.scss']
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return ng2_pg_table_component_1.Ng2PgTableComponent; })))
    ], TableRowComponent);
    return TableRowComponent;
}());
exports.TableRowComponent = TableRowComponent;
