import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RecipeService {

	private readonly BASE_URL: string = "http://localhost:8080/api/v1";
	private readonly RECIPES_URL: string = `${this.BASE_URL}/recipes`;

	private readonly JWT: string = "JWT_TOKEN";

	recipes: BehaviorSubject<any> = new BehaviorSubject<any>({
		recipes: [],
	});


	constructor(private httpClient: HttpClient) {
	}

	// FIXME: pagination when getting all recipes
	getAllRecipes(): Observable<any> {
				return this.httpClient
			.get<any>(this.RECIPES_URL, {headers: this.getHttpHeader()})
			.pipe(tap({
				next: value => this.recipes.next(value.content)
			}));
	}


	private getHttpHeader(): HttpHeaders {
		return new HttpHeaders({
			'Authorization':`Bearer ${localStorage.getItem(this.JWT)}`
		});
	}
}
