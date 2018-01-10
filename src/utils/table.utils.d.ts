export declare class TableUtils {
    static getObjectPropertyByObjectPath(obj: any, prop: any): any;
    static dynamicSortByOrder(property: any, sortOrder: any): (a: any, b: any) => number;
    static generateUniqTag(): number;
    static getTableInnerConfig(tableId: any, floatingButtonsHolderId: any): Object;
    static compareObjectsWithExclude(o1: any, o2: any, exclude: any): boolean;
    static compareObjects(o1: any, o2: any): boolean;
    static getTableName(tableNumber: number): string;
    static getFloatingMenuName(tableNumber: number): string;
}
