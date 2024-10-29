import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

export class Utility {

	static getHttpHeaders(): HttpHeaders {
		return new HttpHeaders({
			Authorization: `Bearer ${localStorage.getItem(environment.JWT)}`
		});
	}
}
