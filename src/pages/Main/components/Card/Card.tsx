// @ts-nocheck
import styles from './Card.module.pcss'
import { RestaurantPrice } from '../../types'

const RestaurantPriceCategories = {
	[RestaurantPrice.Low]: 'Низкая ценовая категория',
	[RestaurantPrice.Medium]: 'Средняя ценовая категория',
	[RestaurantPrice.High]: 'Высокая ценовая категория',
}

const RestaurantPriceRubbles = {
	[RestaurantPrice.Low]: '₽',
	[RestaurantPrice.Medium]: '₽₽',
	[RestaurantPrice.High]: '₽₽₽',
}

const Card = ({ title, price, category, time, image, alt }) => {
	return (
		<section>
			<a className={styles.card} href="#">
				<header className={styles.cardDescription}>
					<h2 className={styles.cardTitle}>{title}</h2>
					<p className={styles.cardPrice}>
						<span className={'visually-hidden'}>{RestaurantPriceCategories[price]}</span>
						<span aria-hidden="true">{RestaurantPriceRubbles[price]}</span> • {category.join(' • ')}
					</p>
					<p className={styles.cardTime}>
						{time.from} - {time.to} мин
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
