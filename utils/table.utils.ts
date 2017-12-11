export class TableUtils {
    public static getObjectPropertyByObjectPath(obj, prop) {
        if (!obj) {
            return false;
        }

        let index = prop.indexOf('.');
        if (index > -1) {
            return this.getObjectPropertyByObjectPath(obj[prop.substring(0, index)], prop.substr(index + 1));
        }

        return obj[prop];
    }

    public static dynamicSortByOrder(property, sortOrder) {

        return function (a, b) {
            let aValue = TableUtils.getObjectPropertyByObjectPath(a, property);
            let bValue = TableUtils.getObjectPropertyByObjectPath(b, property);
            let result = (aValue < bValue) ? -1 : (aValue > bValue) ? 1 : 0;

            return result * sortOrder;
        }
    }

    public static generateUniqTag() {
        return Math.floor((Math.random() * 10000) + 10000);
    }

    public static getTableInnerConfig(tableId, floatingButtonsHolderId) {
        let tableElement = document.getElementById(tableId);
        let tableButtonHolderElement = document.getElementById(floatingButtonsHolderId);

        if (tableElement && tableButtonHolderElement) {
            return {
                tableId: tableId,
                tableDistanceLeft: tableElement.offsetLeft - tableElement.scrollLeft,
                tableButtonHolderElementWidth: tableButtonHolderElement.clientWidth,
                tableButtonHolderElementHeight: tableButtonHolderElement.clientHeight,
                tableWidth: tableElement.clientWidth,
            };
        }

        return {};
    }

    public static compareObjectsWithExclude(o1, o2, exclude) {
        for (let p in o1) {
            if (o1.hasOwnProperty(p)) {
                if (exclude && p === exclude) {
                    continue;
                }
                if (o1[p] !== o2[p]) {
                    return false;
                }
            }
        }
        for (let p in o2) {
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
    }

    public static compareObjects(o1, o2) {
        return TableUtils.compareObjectsWithExclude(o1, o2, null);
    };

    public static getTableName(tableNumber: number) {
        return 'table_' + tableNumber;
    }

    public static getFloatingMenuName(tableNumber: number) {
        return 'floatingMenu_' + tableNumber;
    }

}
