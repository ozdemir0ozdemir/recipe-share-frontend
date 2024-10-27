import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';

@Component({
	selector: 'app-create-recipe-form',
	standalone: true,
	imports: [
		MatFormField,
		MatLabel,
		MatInput,
		FormsModule,
		MatButton,
		MatRadioGroup,
		MatRadioButton
	],
	templateUrl: './create-recipe-form.component.html',
	styleUrl: './create-recipe-form.component.scss'
})
export class CreateRecipeFormComponent {

	recipeItem = {
		title: "",
		description: "",
		vegetarian: false,
		imageUrl: ""
	};

	constructor(private dialog: MatDialog) {
	}


	onSubmit(): void {
		console.log("values", this.recipeItem)
	}
}
