import { Component, Input, OnInit } from '@angular/core';
import { TableBroadcaster } from 'ng2-pg-table';

@Component({
    selector: 'test-button',
    template: `<button (click)="test()">{{name}}</button>`
})
export class TestButtonComponent implements OnInit {
    @Input() tableBroadcaster: TableBroadcaster;

    mouseOverItem: Object;
    rowSelected = [];

    public name: string;
    public randomNumber = Math.random();

    ngOnInit(): void {
        this.tableBroadcaster.mouseOverRow
            .filter(evt => evt != null)
            .subscribe(item => {
                this.mouseOverItem = item;
            });

        this.tableBroadcaster.rowSelected
            .filter(evt => evt != null)
            .subscribe(item => {
                this.rowSelected.push(item);
            });

        this.name = 'test';
    }

    public test() {
        console.log(this.randomNumber, this.mouseOverItem, this.rowSelected)
    }

}
