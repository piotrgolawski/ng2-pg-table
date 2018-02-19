"use strict";
exports.__esModule = true;
var TableUtils = /** @class */ (function () {
    function TableUtils() {
    }
    TableUtils.getObjectPropertyByObjectPath = function (obj, prop) {
        if (!obj) {
            return false;
        }
        var index = prop.indexOf('.');
        if (index > -1) {
            return this.getObjectPropertyByObjectPath(obj[prop.substring(0, index)], prop.substr(index + 1));
        }
        return obj[prop];
    };
    TableUtils.dynamicSortByOrder = function (property, sortOrder) {
        return sortBy;
        function sortBy(a, b) {
            var aValue = TableUtils.getObjectPropertyByObjectPath(a, property);
            var bValue = TableUtils.getObjectPropertyByObjectPath(b, property);
            var result = (aValue < bValue) ? -1 : (aValue > bValue) ? 1 : 0;
            return result * sortOrder;
        }
    };
    TableUtils.generateUniqTag = function () {
        return Math.floor((Math.random() * 10000) + 10000);
    };
    TableUtils.getTableInnerConfig = function (tableId, floatingButtonsHolderId) {
        var tableElement = document.getElementById(tableId);
        var tableButtonHolderElement = document.getElementById(floatingButtonsHolderId);
        if (tableElement && tableButtonHolderElement) {
            return {
                tableId: tableId,
                tableDistanceLeft: tableElement.offsetLeft - tableElement.scrollLeft,
                tableButtonHolderElementWidth: tableButtonHolderElement.clientWidth,
                tableButtonHolderElementHeight: tableButtonHolderElement.clientHeight,
                tableWidth: tableElement.clientWidth
            };
        }
        return {};
    };
    TableUtils.compareObjectsWithExclude = function (o1, o2, exclude) {
        for (var p in o1) {
            if (o1.hasOwnProperty(p)) {
                if (exclude && p === exclude) {
                    continue;
                }
                if (o1[p] !== o2[p]) {
                    return false;
                }
            }
        }
        for (var p in o2) {
            if (o2.hasOwnProperty(p)) {
                if (exclude && p === exclude) {
                    continue;
                }
                if (o1[p] !== o2[p]) {
                    return false;
                }
            }
        }
        return true;
    };
    TableUtils.compareObjects = function (o1, o2) {
        return TableUtils.compareObjectsWithExclude(o1, o2, null);
    };
    ;
    TableUtils.getTableName = function (tableNumber) {
        return 'table_' + tableNumber;
    };
    TableUtils.getFloatingMenuName = function (tableNumber) {
        return 'floatingMenu_' + tableNumber;
    };
    TableUtils.findParentElement = function (element, searchElement, maxDepth) {
        if (typeof element.closest === 'function') {
            return element.closest(searchElement) || null;
        }
        while (element) {
            if (maxDepth <= 0) {
                break;
            }
            maxDepth--;
            if (element.matches(searchElement)) {
                return element;
            }
            element = element.parentElement;
        }
        return null;
    };
    return TableUtils;
}());
exports.TableUtils = TableUtils;
