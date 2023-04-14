import { Container } from '@components'
import { Restaurant } from '@pages/Main/types'
import Card from '../Card'
import styles from './Restaurants.module.pcss'

type RestaurantsProps = {
	items: Restaurant[]
}

function Restaurants({ items }: RestaurantsProps): JSX.Element {
	return (
		<section className={styles.restaurants}>
			<Container>
				<h1 className={styles.restaurantsHeading}>
					Рестораны в Москве
				</h1>
				<div className={styles.restaurantsContainer}>
					{items.map((restaurant: Restaurant) => (
						<Card
							key={restaurant.id}
							id={restaurant.id}
							title={restaurant.title}
							price={restaurant.price}
							category={restaurant.category}
							time={restaurant.time}
							image={restaurant.image}
							alt={restaurant.alt}
						/>
					))}
				</div>
			</Container>
		</section>
	)
}

export default Restaurants
