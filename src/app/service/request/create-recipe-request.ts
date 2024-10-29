export class CreateRecipeRequest {

	constructor(public readonly title: string,
				public readonly imageUrl: string,
				public readonly description: string,
				public readonly vegetarian: boolean){
	}
}
