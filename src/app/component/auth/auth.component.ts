import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {LoginFormGroup} from '../form-model/login-form-group';
import {RegisterFormGroup} from '../form-model/register-form-group';
import {AuthService} from '../../service/auth.service';
import {LoginRequest} from '../../service/request/login-request';
import {AuthResponse} from '../../service/response/auth-response';
import {RecipeService} from '../../service/recipe.service';
import {MeResponse} from '../../service/response/me-response';

@Component({
	selector: 'app-auth',
	standalone: true,
	imports: [
		NgClass,
		FormsModule,
		MatButton,
		MatFormField,
		MatInput,
		MatLabel,
		MatRadioButton,
		MatRadioGroup,
		ReactiveFormsModule
	],
	templateUrl: './auth.component.html',
	styleUrl: './auth.component.scss',
})
export class AuthComponent {

	loginForm: FormGroup<LoginFormGroup> = new FormGroup(new LoginFormGroup());
	registrationForm: FormGroup<RegisterFormGroup> = new FormGroup(new RegisterFormGroup());

	isRegister: boolean = false;

	constructor(private authService: AuthService,
				private recipeService: RecipeService) {
	}

	handleLogin(): void {
			let email: string = "";
		let password: string = "";

		if (this.loginForm.controls.email.value && this.loginForm.controls.password.value) {
			email = this.loginForm.controls.email.value;
			password = this.loginForm.controls.password.value;
		}

		if (email === "" || password === "") {
			return;
		}

		this.authService
			.login(new LoginRequest(email, password))
			.subscribe({
				next: (value: AuthResponse) => console.log(value),
				error: err => console.log(err)
			})
	}

	testRecipes(): void {
		this.authService.getAllUsers().subscribe();
	}

	testMe(): void {
		this.authService.me().subscribe({
			next: (me: MeResponse) => console.log(me)
		});
	}

	handleRegister(): void {
		console.log("register: ", this.registrationForm.value);
	}

	handleFormTypeChange(): void {
		this.isRegister = !this.isRegister;

		// Registration form reset
		this.registrationForm.reset();
		this.registrationForm.controls.fullName.setErrors(null);
		this.registrationForm.controls.email.setErrors(null);
		this.registrationForm.controls.password.setErrors(null);

		// Login form reset
		this.loginForm.reset();
		this.loginForm.controls.email.setErrors(null);
		this.loginForm.controls.password.setErrors(null);

	}

}
