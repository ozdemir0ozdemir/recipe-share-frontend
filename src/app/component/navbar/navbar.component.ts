import {Component} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {AuthService} from '../../service/auth.service';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [
		MatToolbar,
		MatIcon,
		MatButton
	],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss'
})
export class NavbarComponent {



	constructor(protected authService: AuthService) {
		authService.me();
	}

	handleLogout(): void {
		this.authService.logout();
	}
}
