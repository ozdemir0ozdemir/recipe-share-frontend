import {FormControl, Validators} from '@angular/forms';

export class RegisterFormGroup {
	private _fullName: FormControl<string | null> =
		new FormControl("", [Validators.required]);

	private _email: FormControl<string | null> =
		new FormControl("", [Validators.required, Validators.email]);

	private _password: FormControl<string | null> =
		new FormControl("", [Validators.required, Validators.minLength(6)]);


	get fullName(): FormControl<string | null> {
		return this._fullName;
	}

	set fullName(value: FormControl<string | null>) {
		this._fullName = value;
	}

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
