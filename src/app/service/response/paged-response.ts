import {Response} from './response';

export class PagedResponse<T> {

	constructor(public readonly response: Response<T>,
				public readonly page: number,
				public readonly pageSize: number,
				public readonly totalElementCount: number,
				public readonly totalPageCount: number,
				public readonly isFirstPage: boolean,
				public readonly isLastPage: boolean,
				public readonly hasPrevious: boolean,
				public readonly hasNext: boolean) {
	}

}
