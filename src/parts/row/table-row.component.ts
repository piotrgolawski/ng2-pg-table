import { Component, forwardRef, HostListener, Inject, Input } from '@angular/core';
import { TableBroadcaster } from '../../broadcast/table.broadcaster';
import { Ng2PgTableComponent } from '../../ng2-pg-table.component';
import { TableUtils } from '../../utils/table.utils';

@Component({
    selector: '[table-row]',
    template: '<ng-content></ng-content>',
    styleUrls: ['../../table.component.scss']
})
export class TableRowComponent {
    @Input() tableBroadcaster: TableBroadcaster;
    @Input() floatingMenuId: string;
    @Input() item: string;
    @Input() tableNumber: string;
    @Input() selectMode: string;

    public elementHtml;

    @HostListener('mouseover', ['$event'])
    onMouseEnter($event) {
        this.elementHtml = TableUtils.findParentElement($event.target, 'TR', 3);
        this.item['htmlElement'] = TableUtils.findParentElement($event.target, 'TD', 3);
        this.setProperButtonsPosition();
        this.tableBroadcaster.onMouseOverRow(this.item);
    }

    @HostListener('click', ['$event'])
    onClick($event) {
        if (!this.selectMode) {
            return false;
        }

        let rowElement = TableUtils.findParentElement($event.target, 'TR', 3);
        let isSelected = rowElement.classList.contains('selected');

        this.item['htmlElement'] = rowElement;
        this.item['selected'] = !isSelected;

        if (isSelected) {
            this.tableBroadcaster.onRowUnSelected(this.item);
        }
        else {
            this.tableBroadcaster.onRowSelected(this.item);
        }
    }

    constructor(@Inject(forwardRef(() => Ng2PgTableComponent)) protected parent: Ng2PgTableComponent) {
    }

    public setProperButtonsPosition() {
        this.clearAllHoveredElements();
        this.elementHtml.classList.add('hovered');
        let innerConfig = this.parent.innerConfig;

        let left = innerConfig.tableDistanceLeft + (innerConfig.tableWidth / 2) - (innerConfig.tableButtonHolderElementWidth / 2);
        let top = this.elementHtml.getClientRects().item(0).top - (innerConfig.tableButtonHolderElementHeight / 2);

        let floatingMenu = document.getElementById(this.floatingMenuId);
        floatingMenu.style.display = 'inline';
        floatingMenu.style.left = left + 'px';
        floatingMenu.style.top = top + 'px';
    }

    private clearAllHoveredElements(): void {
        let allHoveredRows = document.getElementsByClassName('hovered');
        for (let i = 0; i < allHoveredRows.length; i++) {
            allHoveredRows.item(i).classList.remove('hovered');
        }
    }

}
