import { TableFilterProcessorService } from './table-filter-processor.service';
import { TableBroadcaster } from "../../broadcast/table.broadcaster";
export declare class TableFilterComponent {
    protected tableFilterProcessorService: TableFilterProcessorService;
    tableBroadcaster: TableBroadcaster;
    column: string;
    filterPlaceholder: string;
    items: Object[];
    search: string;
    constructor(tableFilterProcessorService: TableFilterProcessorService);
    filterData(search: any): void;
    clearFilter(): void;
}
