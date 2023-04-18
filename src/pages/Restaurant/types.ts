export type RestaurantInfo = {
	image: string,
	alt: string,
	title: string,
	price: string,
	category: string[],
	time: {
		from: string,
		to: string,
	},
	dishesTypes: Category[],
}

export type Category = {
	id: number,
	title: string,
	dishes: Positions[]
}

export type Positions = {
	id: number;
	title: string;
	addition: string;
	price: number;
	img: string;
}

export type CategoriesProps = {
	items?: {
		dishesTypes: Category[]
	}
}

export enum RestaurantPrice {
	Low = 'low',
	Medium = 'medium',
	High = 'high',
}
