## Simple Angular 2+ table generator
Use on production at your own responsibility, beta stage.


<p align="center">
        <img src="https://github.com/piotrgolawski/ng2-pg-table/blob/master/overview.gif?raw=true">
</p>


### Functions 
* simple listing multi-nested list object properties
* pagination
* sorting
* filtering 
* floating buttons (injected components)
* access to table events


### Instalation

#### npm 
npm install ng2-pg-table

### Howto - examples

##### Html

```html
<ng2-pg-table [config]="config" [data]="data"></ng2-pg-table>

```


##### Config
```typescript
config = {
        columns: [
            {
                name: 'Bank',
                objectPath: 'bank.name'
            },
            {
                name: 'Bank address',
                objectPath: 'bank.address'
            },
            {
                name: 'Manager telephone',
                objectPath: 'bank.manager.telephone'
            }
        ],
        floatingButtonsComponents: [TestButtonComponent],
        globalSettings: {
            filterPlaceholder: 'search',
            paginationLimit: 10,
            select: false // false, multi, single
        }
    };
```

##### Data
```typescript
data = [
        {id: 1, bank: {name: 'Somenicebank', address: 'Someplace 321', manager: { name: 'Don Johnson', telephone: '500500500' }}},
        {id: 2, bank: {name: 'Somenicebank too', address: 'Anotherplace 1b/3', manager: { name: 'Steven Seagal', telephone: '666555444'}}},
        {id: 3, bank: {name: 'Quick cash', address: 'Aroundthecorner 2', manager: { name: 'Some Otherguy', telephone: '123456789'}}},
    ];
```

##### Floating button component
```typescript
import { Component, Input, OnInit } from '@angular/core';
import { TableBroadcaster } from 'ng2-pg-table/broadcast/table.broadcaster';

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
```


##### Styling 

```css

:host /deep/ .ng2-pg-table tr {
    background: azure;
}

```


### TODO

* drag&drop - many tables usage
* show/unselect selected button
* ability to turn off pagination, selection etc.
* custom component filters


##### Thanks very much for npm package generator
https://github.com/jvandemo/generator-angular2-library
