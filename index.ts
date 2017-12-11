import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2PgTableComponent } from './ng2-pg-table.component';
import { TablePagerService } from './parts/pagination/table-pager.service';
import { TableBroadcaster } from './broadcast/table.broadcaster';
import { TableHeaderComponent } from './parts/header/table-header.component';
import { TableRowComponent } from './parts/row/table-row.component';
import { TablePaginationComponent } from './parts/pagination/table-pagination.component';
import { TableFilterComponent } from './parts/filter/table-filter.component';
import { FormsModule } from '@angular/forms';
import { TableFloatingMenuComponent } from './parts/row/floating_menu/table-floating-menu.component';

/**
 * Table generator for Angular 2-5
 *
 * @author Piotr Goławski
 */
@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        Ng2PgTableComponent
    ],
    declarations: [
        Ng2PgTableComponent,
        TableHeaderComponent,
        TableRowComponent,
        TablePaginationComponent,
        TableFilterComponent,
        TableFloatingMenuComponent
    ],
    providers: [
        TablePagerService,
        TableBroadcaster
    ],
})

export class Ng2PgTableModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: Ng2PgTableModule, providers: [TableBroadcaster]};
    }
}
