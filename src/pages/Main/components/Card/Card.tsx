/* eslint-disable jsx-a11y/anchor-is-valid */
import { PropsWithChildren } from 'react'
import styles from './Card.module.pcss'
import { RestaurantPrice } from '../../types'

type RestaurantPriceCategoriesType = {
	[key: string]: string,
}

type RestaurantPriceRubblesType = {
	[key: string]: string,
}

const RestaurantPriceCategories: RestaurantPriceCategoriesType = {
	[RestaurantPrice.Low]: 'Низкая ценовая категория',
	[RestaurantPrice.Medium]: 'Средняя ценовая категория',
	[RestaurantPrice.High]: 'Высокая ценовая категория',
}

const RestaurantPriceRubbles: RestaurantPriceRubblesType = {
	[RestaurantPrice.Low]: '₽',
	[RestaurantPrice.Medium]: '₽₽',
	[RestaurantPrice.High]: '₽₽₽',
}

type CardProps = {
	title: string,
	price: string,
	category: string[],
	time: {
		from: string,
		to: string
	},
	image: string,
	alt: string
}

function Card({
	title, price, category, time, image, alt,
}: PropsWithChildren<CardProps>): JSX.Element {
	return (
		<section>
			<a className={styles.card} href="#">
				<header className={styles.cardDescription}>
					<h2 className={styles.cardTitle}>{title}</h2>
					<p className={styles.cardPrice}>
						<span className="visually-hidden">{RestaurantPriceCategories[price]}</span>
						<span aria-hidden="true">{RestaurantPriceRubbles[price]}</span>
						` • `
						{category.join(' • ')}
					</p>
					<p className={styles.cardTime}>
						{time.from}
						` - `
						{time.to}
						` мин`
					</p>
				</header>
				<img
					className={styles.cardPhoto}
					src={image}
					alt={alt}
					title={alt}
				/>
			</a>
		</section>
	)
}

export default Card
