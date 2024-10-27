import {FormControl, Validators} from '@angular/forms';

export class LoginFormGroup {
	private _email: FormControl<string | null> = new FormControl("", [Validators.required, Validators.email]);
	private _password : FormControl<string | null> = new FormControl("", [Validators.required]);


	get email(): FormControl<string | null> {
		return this._email;
	}

	set email(value: FormControl<string | null>) {
		this._email = value;
	}

	get password(): FormControl<string | null> {
		return this._password;
	}

	set password(value: FormControl<string | null>) {
		this._password = value;
	}

}
