import { Container } from '@components'
import { RestaurantPrice } from '../../types'
import styles from './Jumbotron.module.pcss'

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

type JumbotronProps = {
	items?: {
		image: string,
		alt: string,
		title: string,
		price: string,
		category: string[],
		time: {
			from: string,
			to: string
		},
	}
}

function Jumbotron({ items = undefined }: JumbotronProps): JSX.Element | null {
	if (!items) return null

	return (
		// переделать на другую структуру, чтобы вытягивать все рестораны
		<section className={styles.jumbotron}>
			<img className={styles.jumbotronImage} src={items?.image} alt={items?.alt} />
			<Container className={styles.jumbotronContainer}>
				<div className={styles.jumbotronCard}>
					<h1 className={styles.jumbotronHeading}>{items?.title}</h1>
					<div className={styles.jumbotronDescription}>
						<p className={styles.jumbotronCategory}>
							<span className="visually-hidden">{RestaurantPriceCategories[items?.price]}</span>
							<span aria-hidden="true">{RestaurantPriceRubbles[items?.price]}</span>
							{' • '}
							{items?.category.join(' • ')}
						</p>
						<div className={styles.jumbotronTime}>
							{items?.time.from}
							{' - '}
							{items?.time.to}
							{' мин'}
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Jumbotron
