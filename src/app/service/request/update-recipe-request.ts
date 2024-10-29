export class UpdateRecipeRequest {

	constructor(public readonly title: string,
				public readonly imageUrl: string,
				public readonly description: string,
				public readonly vegetarian: boolean){
	}
}
