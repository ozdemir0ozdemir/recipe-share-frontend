import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {environment} from '../../environments/environment';
import {LoginRequest} from './request/login-request';
import {Response} from './response/response';
import {RegisterRequest} from './request/register-request';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private readonly REGISTER_URL: string = `${environment.apiUrl}/auth`;
	private readonly LOGIN_URL: string = `${environment.apiUrl}/auth/login`;


	constructor(private http: HttpClient) {
	}

	registerUser(request: RegisterRequest): Observable<Response<null>> {
		return this.http.post<Response<null>>(
			this.REGISTER_URL,
			request
		);
	}

	login(request: LoginRequest): Observable<Response<string>> {
		return this.http.post<Response<string>>(this.LOGIN_URL, request)
			.pipe(tap({
				next: (response: Response<string>) => localStorage.setItem(environment.JWT, response.data)
			}));
	}


	logout(): void {
		localStorage.clear();
	}

}
