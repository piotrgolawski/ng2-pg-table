import { Component } from '@angular/core';
export declare class Config {
    columns?: Column[];
    floatingButtonsComponents?: Component[];
    globalSettings?: GlobalSettings;
}
export declare class Column {
    name: string;
    objectPath: string;
}
export declare class GlobalSettings {
    filterPlaceholder: string;
    paginationLimit: number;
    select: any;
    noDataMessage: string;
}
