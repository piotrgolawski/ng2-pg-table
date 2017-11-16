import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableUtils } from './utils/table.utils';
import { TableBroadcaster } from './broadcast/table.broadcaster';
import { Config } from './model/config.model';

@Component({
    selector: 'ng2-pg-table',
    templateUrl: './ng2-pg-table.component.html',
    styleUrls: ['./table.component.scss']
})

export class Ng2PgTableComponent implements OnInit, AfterViewInit {
    @Input() data: Object[];
    @Input() config: Config;

    tableNumber = TableUtils.generateUniqTag();
    tableId = 'table_' + this.tableNumber;
    floatingMenuId = 'floatingMenu_' + this.tableNumber;

    innerConfig;

    localDataCopy: Object[];
    dataToShow: Object[];

    paginationLimit: number;

    @Output() selectedRows = new EventEmitter();
    @Output() mouseOverRow = new EventEmitter();

    selectedRowsArray = [];
    mouseOverRowElement = {};

    tableBroadcaster: TableBroadcaster;

    constructor() {
        this.tableBroadcaster = new TableBroadcaster();
    }

    public updateDataToShow(list) {
        this.dataToShow = list;
    }

    ngOnInit(): void {
        this.localDataCopy = this.data;
        this.paginationLimit = this.config.globalSettings.paginationLimit;
        this.dataToShow = this.data.slice(0, this.paginationLimit);
        this.subscribeEvents();
    }

    // refactor, too big
    private subscribeEvents(): void {
        this.tableBroadcaster.tableFiltered
            .filter(evt => evt != null)
            .subscribe(filteredObjects => {
                this.data = filteredObjects;
                this.dataToShow = this.data.slice(0, this.paginationLimit);
                this.tableBroadcaster.onRecalculatePages();
            });

        this.tableBroadcaster.rowSelected
            .filter(evt => evt != null)
            .subscribe(selectedRow => {
                if (!this.config.globalSettings.multiSelect) {
                    this.data.forEach(function (value, key) {
                        if (value['selected'] && value !== selectedRow) {
                            value['selected'] = false;
                        }
                    });

                    this.selectedRowsArray = [selectedRow];
                }
                else {
                    this.selectedRowsArray.push(selectedRow);
                }

                this.selectedRows.emit(this.selectedRowsArray);
            });

        this.tableBroadcaster.rowUnSelected
            .filter(evt => evt != null)
            .subscribe(selectedRow => {
                let that = this;
                this.selectedRowsArray.forEach(function (value, key) {
                    if (TableUtils.compareObjects(value, selectedRow)) {
                        delete that.selectedRowsArray[key];
                    }
                });
                this.selectedRowsArray = this.selectedRowsArray.filter(function (n) {
                    return n !== undefined
                });

                this.selectedRows.emit(this.selectedRowsArray);
            });

        this.tableBroadcaster.mouseOverRow
            .filter(evt => evt != null)
            .subscribe(mouseOverRow => {
                this.mouseOverRowElement = mouseOverRow;
                this.mouseOverRow.emit(this.mouseOverRowElement);
            });
    }

    ngAfterViewInit(): void {
        this.innerConfig = TableUtils.getTableInnerConfig(this.tableId, this.floatingMenuId);
        this.hideFloatingMenu();
    }

    hideFloatingMenu(): void {
        let floatingMenu = document.getElementById(this.floatingMenuId);
        floatingMenu.style.display = 'none';
    }
}
