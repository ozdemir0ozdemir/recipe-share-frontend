import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {environment} from '../../environments/environment';
import {LoginRequest} from './request/login-request';
import {Response} from './response/response';
import {RegisterRequest} from './request/register-request';
import {UserDto} from './dto/user-dto';
import {UserService} from './user.service';
import {ResponseStatus} from './response/response-status';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private readonly REGISTER_URL: string = `${environment.apiUrl}/auth`;
	private readonly LOGIN_URL: string = `${environment.apiUrl}/auth/login`;

	public authenticatedUser: BehaviorSubject<UserDto | null>
		= new BehaviorSubject<UserDto | null>(null);

	constructor(private http: HttpClient,
				private userService: UserService) {
	}

	registerUser(request: RegisterRequest): Observable<Response<null>> {
		return this.http.post<Response<null>>(
			this.REGISTER_URL,
			request
		);
	}

	// FIXME: Put JWT token into https only, same site cookie instead of localStorage
	login(request: LoginRequest): Observable<Response<string>> {

		let result: Observable<Response<string>> = this.http.post<Response<string>>(this.LOGIN_URL, request)
			.pipe(tap({
				next: (response: Response<string>) => {
					localStorage.setItem(environment.JWT, response.data)
					this.me();
				}
			}));


		return result;
	}

	me(): void{
		let token: string | null = localStorage.getItem(environment.JWT);
		if(token){
			this.userService.me().pipe(tap({
				next: (response: Response<UserDto>) => this.authenticatedUser.next(response.data)
			})).subscribe();
		}
	}


	logout(): void {
		localStorage.removeItem(environment.JWT);
		this.authenticatedUser.next(null);
	}

}
