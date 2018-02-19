export declare class TableFilterProcessorService {
    static objectPathRelationList: {};
    private tableBroadcaster;
    private items;
    setItems(items: any): void;
    setTableBroadcaster(tableBroadcaster: any): void;
    setSearchByObjectPath(objectPath: any, search: any): void;
    filterData(): void;
    filterPassed(item: any, objectPath: any, search: any): boolean;
}
