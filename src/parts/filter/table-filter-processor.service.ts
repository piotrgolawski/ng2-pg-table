import { Injectable } from '@angular/core';
import { TableUtils } from '../../utils/table.utils';
import { TableBroadcaster } from '../../broadcast/table.broadcaster';

@Injectable()
export class TableFilterProcessorService {
    static objectPathRelationList = {};
    private tableBroadcaster: TableBroadcaster;
    private items: Object[];

    public setItems(items) {
        this.items = items;
    }

    public setTableBroadcaster(tableBroadcaster) {
        if (!this.tableBroadcaster) {
            this.tableBroadcaster = tableBroadcaster;
        }
    }

    public setSearchByObjectPath(objectPath, search) {
        if (objectPath) {
            TableFilterProcessorService.objectPathRelationList[objectPath] = search;
            this.filterData()
        }
    }

    public filterData() {
        let returnArray = [];
        let that = this;
        this.items.forEach(function (item) {
            let passItem = true;
            let objectKeys = Object.keys(TableFilterProcessorService.objectPathRelationList);

            objectKeys.forEach(function (objectPath) {
                let search = TableFilterProcessorService.objectPathRelationList[objectPath];
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
    }

    public filterPassed(item, objectPath, search) {
        if (!search) {
            return true;
        }

        let objVariable = TableUtils.getObjectPropertyByObjectPath(item, objectPath);
        if (objVariable) {
            objVariable = objVariable.toString().replace(/<\/?[^>]+(>|$)/g, '').toLowerCase();
            if (objVariable.indexOf(search.toLowerCase()) > -1) {
                return true;
            }
        }

        return false;
    }
}
