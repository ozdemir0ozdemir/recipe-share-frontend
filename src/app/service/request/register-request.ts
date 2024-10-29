export class RegisterRequest{

	constructor(public readonly email: string,
				public readonly fullName: string,
				public readonly password: string) {
	}
}
