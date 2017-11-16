import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TableBroadcaster } from '../../../broadcast/table.broadcaster';

@Component({
    selector: 'table-floating-menu',
    templateUrl: './table-floating-menu.component.html',
    styleUrls: ['../../../table.component.scss']
})
export class TableFloatingMenuComponent implements OnInit {
    @Input() tableBroadcaster: TableBroadcaster;
    @Input() components: any[];

    @ViewChild('viewContainerRef', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        let that = this;
        this.components.forEach(function (component) {
            that.getComponentByName(component)
        })
    }

    public getComponentByName(component) {
        let factory = this.componentFactoryResolver.resolveComponentFactory(component);
        let instance = this.viewContainerRef.createComponent(factory);
        instance.instance['tableBroadcaster'] = this.tableBroadcaster;
    }

}
