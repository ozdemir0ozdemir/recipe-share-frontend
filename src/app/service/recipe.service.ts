import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {PagedResponse} from './response/paged-response';
import {RecipeDto} from './dto/recipe-dto';
import {Response} from './response/response';
import {CreateRecipeRequest} from './request/create-recipe-request';
import {Utility} from './utility';
import {UpdateRecipeRequest} from './request/update-recipe-request';

@Injectable({
	providedIn: 'root'
})
export class RecipeService {

	private readonly RECIPES_URL: string = `${environment.apiUrl}/recipes`;

	constructor(private http: HttpClient) {
	}

	getAllRecipes(page: number = 1, pageSize: number = 5): Observable<PagedResponse<RecipeDto[]>> {
		return this.http.get<PagedResponse<RecipeDto[]>>(this.RECIPES_URL)}

	getRecipeById(recipeId: number): Observable<Response<RecipeDto>> {
		return this.http.get<Response<RecipeDto>>(`${this.RECIPES_URL}/${recipeId}`);
	}

	createRecipe(request: CreateRecipeRequest): Observable<Response<RecipeDto>> {
		return this.http.post<Response<RecipeDto>>(
			`${this.RECIPES_URL}`,
			request,
			{headers: Utility.getHttpHeaders()}
		);
	}

	updateRecipe(request: UpdateRecipeRequest, recipeId: number): Observable<Response<RecipeDto>> {
		return this.http.patch<Response<RecipeDto>>(
			`${this.RECIPES_URL}/${recipeId}`,
			request,
			{headers: Utility.getHttpHeaders()});
	}

	deleteRecipe(recipeId: number): Observable<void> {
		return this.http.delete<void>(`${this.RECIPES_URL}/${recipeId}`, {headers: Utility.getHttpHeaders()});
	}



}
