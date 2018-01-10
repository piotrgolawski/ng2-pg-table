export declare class TableFilterProcessorService {
    private tableBroadcaster;
    private items;
    static objectPathRelationList: {};
    setItems(items: any): void;
    setTableBroadcaster(tableBroadcaster: any): void;
    setSearchByObjectPath(objectPath: any, search: any): void;
    filterData(): void;
    filterPassed(item: any, objectPath: any, search: any): boolean;
}
