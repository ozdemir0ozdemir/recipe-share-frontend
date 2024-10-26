import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './page/navbar/navbar.component';
import {FooterComponent} from './page/footer/footer.component';
import {RecipeCardComponent} from './page/recipe-card/recipe-card.component';
import {HomePageComponent} from './page/home-page/home-page.component';


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NavbarComponent, FooterComponent, RecipeCardComponent, HomePageComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
}
