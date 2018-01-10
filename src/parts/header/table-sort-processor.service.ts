import { Injectable } from '@angular/core';
import { TableUtils } from '../../utils/table.utils';
import { TableBroadcaster } from '../../broadcast/table.broadcaster';

@Injectable()
export class TableSortProcessorService {
    private items: Object[];
    private tableBroadcaster: TableBroadcaster;

    public setItems(items) {
        this.items = items;
    }

    public setTableBroadcaster(tableBroadcaster) {
        if (!this.tableBroadcaster) {
            this.tableBroadcaster = tableBroadcaster;
        }
    }

    public setSortByObjectPath(objectPath, order) {
        this.tableBroadcaster.onClearOrder(objectPath);

        this.sortList(objectPath, order)
    }

    private sortList(objectPath, order) {
        this.items.sort(TableUtils.dynamicSortByOrder(objectPath, order));
        this.tableBroadcaster.onTableFiltered(this.items);
    }

}
