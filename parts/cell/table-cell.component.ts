import { Component, Input, OnInit } from '@angular/core';
import { TableUtils } from '../../utils/table.utils';

@Component({
    selector: '[table-cell]',
    template: `{{name}}`,
    styleUrls: ['../../table.component.scss']
})
export class TableCellComponent implements OnInit {
    @Input() item: string;
    @Input() objectPath: string;

    public name: string;

    ngOnInit(): void {
        this.name = this.getProperty(this.item, this.objectPath);
    }

    public getProperty(item, objectPath) {
        if (item) {
            let value = TableUtils.getObjectPropertyByObjectPath(item, objectPath);
            if (value) {
                return value.toString();
            }
        }

        return ' - ';
    }

}
