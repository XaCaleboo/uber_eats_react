import { Container } from '@components'
import type { Positions } from '@pages/Restaurant/types'
import styles from './Dishes.module.pcss'
import Position from '../Position'

type DishesProps = {
	items: Positions[]
}

function Dishes({ items }: DishesProps): JSX.Element {
	return (
		<section className={styles.dishes}>
			<Container>
				<h2 className={styles.dishesTitle}>Закуски</h2>
				<div className={styles.dishesItems}>
					{items.map((position: Positions) => (
						<Position
							key={position.id}
							id={position.id}
							title={position.title}
							addition={position.addition}
							price={position.price}
							img={position.img}
						/>
					))}
				</div>
			</Container>
		</section>

	)
}

export default Dishes
