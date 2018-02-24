import { Component, forwardRef, HostListener, Inject, Input } from '@angular/core';
import { TableBroadcaster } from '../../broadcast/table.broadcaster';
import { Ng2PgTableComponent } from '../../ng2-pg-table.component';

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
        this.elementHtml = $event.target.closest('TR');
        this.item['htmlElement'] = $event.target.closest('TD');
        this.setProperButtonsPosition();
        this.tableBroadcaster.onMouseOverRow(this.item);
    }

    @HostListener('click', ['$event'])
    onClick($event) {
        if (!this.selectMode) {
            return false;
        }

        let rowElement = $event.target.closest('TR');
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
        let table = this.elementHtml.closest('TABLE');
        let tableButtonHolderElement = document.getElementById(this.floatingMenuId);

        tableButtonHolderElement.style.display = 'inline';
        tableButtonHolderElement.style.position = 'absolute';

        let left = table.offsetLeft + this.elementHtml.offsetLeft + ((this.elementHtml.clientWidth / 2) - tableButtonHolderElement.clientWidth / 2) ;
        let top = table.offsetTop + this.elementHtml.offsetTop + (this.elementHtml.clientHeight * (70 / 100));

        tableButtonHolderElement.style.left = left + 'px';
        tableButtonHolderElement.style.top = top + 'px';
    }

    private clearAllHoveredElements(): void {
        let allHoveredRows = document.getElementsByClassName('hovered');
        for (let i = 0; i < allHoveredRows.length; i++) {
            allHoveredRows.item(i).classList.remove('hovered');
        }
    }

}
