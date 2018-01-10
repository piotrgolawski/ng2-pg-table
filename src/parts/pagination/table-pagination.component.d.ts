import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { TablePagerService } from './table-pager.service';
import { TableBroadcaster } from '../../broadcast/table.broadcaster';
export declare class TablePaginationComponent implements OnInit, OnChanges {
    private pagerService;
    tableBroadcaster: TableBroadcaster;
    items: any[];
    paginationLimit: number;
    itemsPaged: EventEmitter<{}>;
    pager: any;
    pagedItems: any[];
    constructor(pagerService: TablePagerService);
    ngOnInit(): void;
    ngOnChanges(): void;
    recalculatePages(): void;
    setPage(page: number): void;
}
