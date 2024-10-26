import {Component} from '@angular/core';
import {RecipeCardComponent} from '../recipe-card/recipe-card.component';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [
		RecipeCardComponent
	],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
	recipe: number[] = [1, 2, 3, 4, 5, 6];
}
