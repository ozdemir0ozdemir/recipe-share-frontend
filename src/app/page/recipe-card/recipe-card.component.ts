import {Component} from '@angular/core';
import {
	MatCard,
	MatCardActions,
	MatCardContent,
	MatCardHeader,
	MatCardSubtitle,
	MatCardTitle
} from '@angular/material/card';

@Component({
	selector: 'app-recipe-card',
	standalone: true,
	imports: [
		MatCard,
		MatCardHeader,
		MatCardContent,
		MatCardActions,
		MatCardTitle,
		MatCardSubtitle
	],
	templateUrl: './recipe-card.component.html',
	styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {

}
