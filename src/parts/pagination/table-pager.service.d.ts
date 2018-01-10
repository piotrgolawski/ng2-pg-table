export declare class TablePagerService {
    getPager(totalItems: number, currentPage?: number, pageSize?: number): {
        totalItems: number;
        currentPage: number;
        pageSize: number;
        totalPages: number;
        startPage: number;
        endPage: number;
        startIndex: number;
        endIndex: number;
        pages: any[];
    };
}
