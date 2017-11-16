import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TablePagerService } from './table-pager.service';
import { TableBroadcaster } from '../../broadcast/table.broadcaster';

@Component({
    selector: 'table-pagination',
    templateUrl: './table-pagination.component.html',
    styleUrls: ['../../table.component.scss']
})
export class TablePaginationComponent implements OnInit, OnChanges {
    @Input() tableBroadcaster: TableBroadcaster;
    @Input() items: any[];
    @Input() paginationLimit: number;
    @Output() itemsPaged = new EventEmitter();

    pager: any = {};
    pagedItems: any[];

    constructor(private pagerService: TablePagerService) {
    }

    ngOnInit(): void {
        this.tableBroadcaster.recalculatePages
            .subscribe(() => {
                this.recalculatePages();
            });

        this.setPage(1);
    }

    ngOnChanges(): void {
        this.recalculatePages();
    }

    public recalculatePages(): void {
        this.setPage(this.pager.currentPage)
    }

    setPage(page: number) {
        this.pager = this.pagerService.getPager(Object.keys(this.items).length, page, this.paginationLimit);
        this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

        this.itemsPaged.emit(this.pagedItems);
    }
}
