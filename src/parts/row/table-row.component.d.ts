import { TableBroadcaster } from '../../broadcast/table.broadcaster';
import { Ng2PgTableComponent } from '../../ng2-pg-table.component';
export declare class TableRowComponent {
    protected parent: Ng2PgTableComponent;
    tableBroadcaster: TableBroadcaster;
    floatingMenuId: string;
    item: string;
    tableNumber: string;
    selectMode: string;
    elementHtml: any;
    onMouseEnter($event: any): void;
    onClick($event: any): boolean;
    constructor(parent: Ng2PgTableComponent);
    setProperButtonsPosition(): void;
    private clearAllHoveredElements();
}
