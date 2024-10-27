import {Component} from '@angular/core';
import {
	MatCard,
	MatCardActions,
	MatCardContent,
	MatCardHeader,
	MatCardSubtitle,
	MatCardTitle
} from '@angular/material/card';
import {MatButton, MatIconButton, MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {EditRecipeFormComponent} from '../edit-recipe-form/edit-recipe-form.component';

@Component({
	selector: 'app-recipe-card',
	standalone: true,
	imports: [
		MatCard,
		MatCardHeader,
		MatCardContent,
		MatCardActions,
		MatCardTitle,
		MatCardSubtitle,
		MatButton,
		MatIcon,
		MatMiniFabButton,
		MatIconButton
	],
	templateUrl: './recipe-card.component.html',
	styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {

	constructor(private dialog: MatDialog) {
	}

	handleOpenEditRecipeForm(): void {
		this.dialog.open(EditRecipeFormComponent, {});
	}
}
