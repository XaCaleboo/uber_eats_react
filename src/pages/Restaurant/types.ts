export type Category = {
	id: number,
	title: string,
	dishes: Positions[]
}

export type CategoriesProps = {
	items?: {
		dishesTypes: Category[]
	}
}

export type Positions = {
	id: number;
	title: string;
	addition: string;
	price: number;
	img: string;
}

export enum RestaurantPrice {
	Low = 'low',
	Medium = 'medium',
	High = 'high',
}
