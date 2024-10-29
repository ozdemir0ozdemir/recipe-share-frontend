import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.development';
import {Observable} from 'rxjs';
import {Response} from './response/response';
import {UserDto} from './dto/user-dto';
import {HttpClient} from '@angular/common/http';
import {Utility} from './utility';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private readonly USERS_URL: string = `${environment.apiUrl}/users`;
	private readonly ME_URL: string = `${environment.apiUrl}/users/me`;

	constructor(private http: HttpClient) {
	}



	me(): Observable<Response<UserDto>> {
		return this.http.get<Response<UserDto>>(this.ME_URL, {headers: Utility.getHttpHeaders()})
	}
}
