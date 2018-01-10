import { Subject } from 'rxjs';
export declare class TableBroadcaster {
    tableFiltered: Subject<Object[]>;
    clearOrder: Subject<string>;
    recalculatePages: Subject<null>;
    mouseOverRow: Subject<Object>;
    rowSelected: Subject<Object>;
    rowUnSelected: Subject<Object>;
    onTableFiltered(objects: Object[]): void;
    onClearOrder(excludedObjectPath: string): void;
    onRecalculatePages(): void;
    onMouseOverRow(object: Object): void;
    onRowSelected(object: Object): void;
    onRowUnSelected(object: Object): void;
}
