import { ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { TableBroadcaster } from '../../../broadcast/table.broadcaster';
export declare class TableFloatingMenuComponent implements OnInit {
    private componentFactoryResolver;
    tableBroadcaster: TableBroadcaster;
    components: any[];
    viewContainerRef: ViewContainerRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    getComponentByName(component: any): void;
}
