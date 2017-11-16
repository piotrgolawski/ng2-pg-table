import { Component, Input } from '@angular/core';
import { TableFilterProcessorService } from './table-filter-processor.service';
import { TableBroadcaster } from "../../broadcast/table.broadcaster";

@Component({
    selector: '[table-search]',
    templateUrl: './table-filter.component.html',
    providers: [TableFilterProcessorService]
})
export class TableFilterComponent {
    @Input() tableBroadcaster: TableBroadcaster;
    @Input() column: string;
    @Input() filterPlaceholder: string;
    @Input() items: Object[];

    search: string;

    constructor(protected tableFilterProcessorService: TableFilterProcessorService) {
    }

    public filterData(search) {
        this.tableFilterProcessorService.setItems(this.items);
        this.tableFilterProcessorService.setTableBroadcaster(this.tableBroadcaster);
        this.tableFilterProcessorService.setSearchByObjectPath(this.column['objectPath'], search);
    }

    public clearFilter(): void {
        this.search = '';
        this.filterData('');
    }
}
