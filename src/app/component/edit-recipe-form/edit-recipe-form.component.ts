import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";

@Component({
	selector: 'app-edit-recipe-form',
	standalone: true,
	imports: [
		FormsModule,
		MatButton,
		MatFormField,
		MatInput,
		MatLabel,
		MatRadioButton,
		MatRadioGroup,
		ReactiveFormsModule
	],
	templateUrl: './edit-recipe-form.component.html',
	styleUrl: './edit-recipe-form.component.scss'
})
export class EditRecipeFormComponent {

	recipeItem = {
		title: "baslik",
		description: "aciklama",
		vegetarian: "false",
		imageUrl: "resim"
	};


	onSubmit(): void {

	}
}
