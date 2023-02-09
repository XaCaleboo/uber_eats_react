/* eslint-disable import/prefer-default-export */
export enum RestaurantPrice {
	Low = 'low',
	Medium = 'medium',
	High = 'high',
}

export type Restaurant = {
	title: string,
	price: string,
	category: string[],
	time: {
		from: string,
		to: string
	},
	image: string,
	alt: string,
	id: number
}
