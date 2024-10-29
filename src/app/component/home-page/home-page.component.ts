import {Component} from '@angular/core';
import {RecipeCardComponent} from '../recipe-card/recipe-card.component';
import { MatButtonModule, MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CreateRecipeFormComponent} from '../create-recipe-form/create-recipe-form.component';
import {AuthService} from '../../service/auth.service';
import {RecipeService} from '../../service/recipe.service';
import {RecipeDto} from '../../service/dto/recipe-dto';
import {PagedResponse} from '../../service/response/paged-response';

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
	recipes: RecipeDto[] = [];

	constructor(private dialog: MatDialog,
				private recipeService: RecipeService) {

		recipeService.getAllRecipes().subscribe({
			next: (recipes: PagedResponse<RecipeDto[]>) => this.recipes = recipes.response.data
		});
	}


	handleOpenCreateRecipeForm(): void {
		const dialogRef:MatDialogRef<any> = this.dialog.open(CreateRecipeFormComponent, {

		});

		dialogRef.afterClosed().subscribe({
			next: value => console.log(value)
		});
	}
}
