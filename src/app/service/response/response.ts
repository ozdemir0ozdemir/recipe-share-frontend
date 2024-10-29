import {ResponseStatus} from './response-status';

export class Response<T> {

	constructor(public readonly data: T,
				public readonly message: string,
				public readonly status: ResponseStatus) {
	}



}

