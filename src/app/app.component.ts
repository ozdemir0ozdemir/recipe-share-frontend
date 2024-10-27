import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {RecipeCardComponent} from './component/recipe-card/recipe-card.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {AuthComponent} from './component/auth/auth.component';


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		NavbarComponent,
		FooterComponent,
		RecipeCardComponent,
		HomePageComponent,
		AuthComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
}
