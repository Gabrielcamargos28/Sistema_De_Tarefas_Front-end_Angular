import { Pageable } from "./pageable.model";
import { Sort } from "./sort.model";

export interface ApiResponse{
        content: any[];
        pageable: Pageable;
        last: boolean;
        totalPages: number;
        totalElements: number;
        size: number;
        number: number;
        sort: Sort;
        first: boolean;
        numberOfElements: number;
        empty: boolean;
}