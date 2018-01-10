import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TableBroadcaster } from '../../broadcast/table.broadcaster';
import { TableSortProcessorService } from './table-sort-processor.service';

@Component({
    selector: '[table-column]',
    templateUrl: './table-header.component.html',
    styleUrls: ['../../table.component.scss'],
    providers: [TableSortProcessorService]
})
export class TableHeaderComponent implements OnInit {
    @Input() tableBroadcaster: TableBroadcaster;
    @Input() modelColumnName: string;
    @Input() objectPath: string;
    @Input() items: Object[];

    orderState = null;

    @HostListener('click')
    onClick() {
        this.orderState = this.getProperActualSortingDirection();

        this.tableSortProcessorService.setItems(this.items);
        this.tableSortProcessorService.setTableBroadcaster(this.tableBroadcaster);
        this.tableSortProcessorService.setSortByObjectPath(this.objectPath, this.orderState)
    };

    ngOnInit(): void {
        this.tableBroadcaster.clearOrder
            .filter(evt => evt != null)
            .subscribe(excludedObjectPath => {
                if (!excludedObjectPath || this.objectPath !== excludedObjectPath) {
                    this.orderState = null;
                }
            });
    }

    constructor(private tableSortProcessorService: TableSortProcessorService) {
    }

    public getProperActualSortingDirection() {
        let orderState = 1;
        switch (this.orderState) {
            case 1: {
                orderState = -1;
                break;
            }
            case -1: {
                orderState = null;
                break;
            }
        }

        return orderState;
    }

}
