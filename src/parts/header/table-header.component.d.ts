import { OnInit } from '@angular/core';
import { TableBroadcaster } from '../../broadcast/table.broadcaster';
import { TableSortProcessorService } from './table-sort-processor.service';
export declare class TableHeaderComponent implements OnInit {
    private tableSortProcessorService;
    tableBroadcaster: TableBroadcaster;
    modelColumnName: string;
    objectPath: string;
    items: Object[];
    orderState: any;
    onClick(): void;
    ngOnInit(): void;
    constructor(tableSortProcessorService: TableSortProcessorService);
    getProperActualSortingDirection(): number;
}
