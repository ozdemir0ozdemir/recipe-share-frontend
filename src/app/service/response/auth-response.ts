export class AuthResponse{

	constructor(private _jwtToken: string,
				private _message: string) {
	}

	get jwtToken(): string {
		return this._jwtToken;
	}

	get message(): string {
		return this._message;
	}
}
