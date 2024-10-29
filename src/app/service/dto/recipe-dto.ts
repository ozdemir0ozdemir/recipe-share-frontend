export class RecipeDto {
	constructor(public readonly title: string,
				public readonly imageUrl: string,
				public readonly description: string,
				public readonly vegetarian: boolean,
				public readonly createdAt: Date,
				public readonly updatedAt: Date) {
	}
}
