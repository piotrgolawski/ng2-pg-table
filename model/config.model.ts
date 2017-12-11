import { Component } from '@angular/core';

export class Config {
    public columns?: Column[];
    public floatingButtonsComponents?: Component[];
    public globalSettings?: GlobalSettings;
}

export class Column {
    public name: string;
    public objectPath: string;
}

export class GlobalSettings {
    public filterPlaceholder: string;
    public paginationLimit = 10;
    public select = null; // false, multi, single
    public noDataMessage: string;
}
