import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TableBroadcaster {
    public tableFiltered: Subject<Object[]> = new Subject<Object[]>();
    public clearOrder: Subject<string> = new Subject<string>();
    public recalculatePages: Subject<null> = new Subject<null>();

    public mouseOverRow: Subject<Object> = new Subject<Object>();
    public rowSelected: Subject<Object> = new Subject<Object>();
    public rowUnSelected: Subject<Object> = new Subject<Object>();

    public onTableFiltered(objects: Object[]): void {
        this.tableFiltered.next(objects);
    }

    public onClearOrder(excludedObjectPath: string): void {
        this.clearOrder.next(excludedObjectPath);
    }

    public onRecalculatePages(): void {
        this.recalculatePages.next();
    }

    public onMouseOverRow(object: Object): void {
        this.mouseOverRow.next(object);
    }

    public onRowSelected(object: Object): void {
        this.rowSelected.next(object);
    }

    public onRowUnSelected(object: Object): void {
        this.rowUnSelected.next(object);
    }
}
