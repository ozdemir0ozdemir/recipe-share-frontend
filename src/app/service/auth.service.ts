import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {AuthResponse} from './response/auth-response';
import {CreateUserRequest} from './request/create-user-request';
import {LoginRequest} from './request/login-request';
import {MeResponse} from './response/me-response';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private readonly BASE_URL: string = "http://localhost:8080/api/v1";
	private readonly REGISTER_URL: string = `${this.BASE_URL}/auth`;
	private readonly LOGIN_URL: string = `${this.BASE_URL}/auth/login`;
	private readonly ME_URL: string = `${this.BASE_URL}/users/me`;

	private readonly JWT: string = "JWT_TOKEN";

	authSubject: BehaviorSubject<MeResponse> =
		new BehaviorSubject<MeResponse>(new MeResponse("", ""));

	constructor(private httpClient: HttpClient) {
	}

	getAllUsers(): Observable<any> {
		const headers: HttpHeaders = new HttpHeaders({
			Authorization: `Bearer ${localStorage.getItem(this.JWT)}`
		});

		return this.httpClient.get<any>(`${this.BASE_URL}/users`, {headers: headers})
			.pipe(tap({
				next: value => console.log(value)
			}));
	}

	registerUser(createUserRequest: CreateUserRequest): Observable<AuthResponse> {
		return this.httpClient.post<AuthResponse>(
			this.REGISTER_URL,
			createUserRequest
		);
	}

	login(loginRequest: LoginRequest): Observable<AuthResponse> {
		return this.httpClient.post<AuthResponse>(this.LOGIN_URL, loginRequest)
			.pipe(tap({
				next: (auth:AuthResponse) => localStorage.setItem(this.JWT, auth.jwtToken)
			}));
	}

	me(): Observable<MeResponse> {
		const headers: HttpHeaders = new HttpHeaders({
			Authorization: `Bearer ${localStorage.getItem(this.JWT)}`
		});

		return this.httpClient
			.get<MeResponse>(this.ME_URL, {headers: headers})
			.pipe(tap({
				next: (me: MeResponse) => this.authSubject.next(me)
			}));
	}

	logout(): void {
		localStorage.clear();
		this.authSubject.next(new MeResponse("", ""));
	}

}
