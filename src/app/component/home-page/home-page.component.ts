import {Component} from '@angular/core';
import {RecipeCardComponent} from '../recipe-card/recipe-card.component';
import { MatButtonModule, MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CreateRecipeFormComponent} from '../create-recipe-form/create-recipe-form.component';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [
		RecipeCardComponent,
		MatFabButton,
		MatIcon,
		MatButtonModule
	],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
	recipe: number[] = [1, 2, 3, 4, 5, 6];

	constructor(private dialog: MatDialog) {
	}


	handleOpenCreateRecipeForm(): void {
		const dialogRef:MatDialogRef<any> = this.dialog.open(CreateRecipeFormComponent, {

		});

		dialogRef.afterClosed().subscribe({
			next: value => console.log(value)
		});
	}
}
