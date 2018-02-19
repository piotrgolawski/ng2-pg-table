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
var TableFilterProcessorService = /** @class */ (function () {
    function TableFilterProcessorService() {
    }
    TableFilterProcessorService_1 = TableFilterProcessorService;
    TableFilterProcessorService.prototype.setItems = function (items) {
        this.items = items;
    };
    TableFilterProcessorService.prototype.setTableBroadcaster = function (tableBroadcaster) {
        if (!this.tableBroadcaster) {
            this.tableBroadcaster = tableBroadcaster;
        }
    };
    TableFilterProcessorService.prototype.setSearchByObjectPath = function (objectPath, search) {
        if (objectPath) {
            TableFilterProcessorService_1.objectPathRelationList[objectPath] = search;
            this.filterData();
        }
    };
    TableFilterProcessorService.prototype.filterData = function () {
        var returnArray = [];
        var that = this;
        this.items.forEach(function (item) {
            var passItem = true;
            var objectKeys = Object.keys(TableFilterProcessorService_1.objectPathRelationList);
            objectKeys.forEach(function (objectPath) {
                var search = TableFilterProcessorService_1.objectPathRelationList[objectPath];
                if (search && !that.filterPassed(item, objectPath, search)) {
                    passItem = false;
                    return false;
                }
            });
            if (passItem) {
                returnArray.push(item);
            }
        });
        this.tableBroadcaster.onTableFiltered(returnArray);
    };
    TableFilterProcessorService.prototype.filterPassed = function (item, objectPath, search) {
        if (!search) {
            return true;
        }
        var objVariable = table_utils_1.TableUtils.getObjectPropertyByObjectPath(item, objectPath);
        if (objVariable) {
            objVariable = objVariable.toString().replace(/<\/?[^>]+(>|$)/g, '').toLowerCase();
            if (objVariable.indexOf(search.toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    TableFilterProcessorService.objectPathRelationList = {};
    TableFilterProcessorService = TableFilterProcessorService_1 = __decorate([
        core_1.Injectable()
    ], TableFilterProcessorService);
    return TableFilterProcessorService;
    var TableFilterProcessorService_1;
}());
exports.TableFilterProcessorService = TableFilterProcessorService;
