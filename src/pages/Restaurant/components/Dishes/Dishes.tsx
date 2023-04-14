import { Container } from '@components'
import type { CategoriesProps, Positions } from '@pages/Restaurant/types'
import styles from './Dishes.module.pcss'
import Position from '../Position'

function Dishes({ items }: CategoriesProps): JSX.Element | null {
	if (!items) return null

	return (
		<section className={styles.dishes}>
			{items.dishesTypes.map((categories) => (
				<Container key={categories.id}>
					<h2 className={styles.dishesTitle} id={categories.title}>{categories.title}</h2>
					<div className={styles.dishesItems}>
						{categories.dishes.map((position: Positions) => (
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
			))}
		</section>
	)
}

export default Dishes
