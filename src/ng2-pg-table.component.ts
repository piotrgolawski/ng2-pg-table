import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { TableUtils } from './utils/table.utils';
import { TableBroadcaster } from './broadcast/table.broadcaster';
import { Config } from './model/config.model';

@Component({
    selector: 'ng2-pg-table',
    templateUrl: './ng2-pg-table.component.html',
    styleUrls: ['./table.component.scss']
})
export class Ng2PgTableComponent implements OnInit, AfterViewInit, OnChanges, AfterViewChecked {
    @Input() data: Object[];
    @Input() config: Config;

    @Output() selectedRows = new EventEmitter();
    @Output() mouseOverRow = new EventEmitter();

    tableNumber = TableUtils.generateUniqTag();
    tableId = TableUtils.getTableName(this.tableNumber);
    floatingMenuId = TableUtils.getFloatingMenuName(this.tableNumber);

    innerConfig;

    localDataCopy: Object[];
    dataToShow: Object[];

    paginationLimit: number;

    selectedRowsArray = [];
    mouseOverRowElement = {};

    tableBroadcaster: TableBroadcaster;

    constructor(private cdRef: ChangeDetectorRef) {
        this.tableBroadcaster = new TableBroadcaster();
    }

    public updateDataToShow(list) {
        this.dataToShow = list;
    }

    ngOnInit(): void {
        this.rearrangeData();
        this.subscribeEvents();
    }

    ngAfterViewInit(): void {
        this.innerConfig = TableUtils.getTableInnerConfig(this.tableId, this.floatingMenuId);
        this.hideFloatingMenu();
    }

    private hideFloatingMenu(): void {
        let floatingMenu = document.getElementById(this.floatingMenuId);
        if (floatingMenu) {
            floatingMenu.style.display = 'none';
        }
    }

    ngOnChanges(): void {
        this.rearrangeData();
    }

    // because of ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }

    private rearrangeData() {
        this.localDataCopy = this.data;
        this.paginationLimit = this.config.globalSettings.paginationLimit;
        this.dataToShow = this.data ? this.data.slice(0, this.paginationLimit) : [];
    }

    private subscribeEvents(): void {
        this.tableBroadcaster.tableFiltered
            .filter(evt => evt != null)
            .subscribe(filteredObjects => {
                this.data = filteredObjects;
                this.dataToShow = this.data.slice(0, this.paginationLimit);
                this.tableBroadcaster.onRecalculatePages();
            });

        if (this.config.globalSettings.select) {
            this.setSelectBroadcast();
        }

        this.tableBroadcaster.mouseOverRow
            .filter(evt => evt != null)
            .subscribe(mouseOverRow => {
                this.mouseOverRowElement = mouseOverRow;
                this.mouseOverRow.emit(mouseOverRow);
            });
    }

    private setSelectBroadcast(): void {
        this.tableBroadcaster.rowSelected
            .filter(evt => evt != null)
            .subscribe(selectedRow => {
                if (this.config.globalSettings.select === 'single') {
                    this.data.forEach(function (value, key) {
                        if (value['selected'] && value !== selectedRow) {
                            value['selected'] = false;
                        }
                    });

                    this.selectedRowsArray = [selectedRow];
                }
                else if (this.config.globalSettings.select === 'multi') {
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
    }

    // TODO this method should not be here?
    public getProperty(item, objectPath) {
        if (item) {
            let value = TableUtils.getObjectPropertyByObjectPath(item, objectPath);
            if (value !== undefined && value !== null && value !== false) {
                return value;
            }
        }

        return ' - ';
    }

    public dataCanBeShown() {
        return this.dataToShow != null && this.dataToShow.length > 0;
    }
}
