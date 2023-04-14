import { Container } from '@components'
import type { CategoriesProps, Category } from '@pages/Restaurant/types'
import clsx from 'clsx'
import styles from './Menu.module.pcss'

function Menu({ items = undefined }: CategoriesProps): JSX.Element | null {
	if (!items) return null

	return (
		<nav className={clsx(styles.menu, 'visually-hidden_xs', 'visually-hidden_sm')}>
			<Container>
				<ul className={styles.menuContainer}>
					{items.dishesTypes.map((category: Category) => (
						<li className={styles.menuItem} key={category.id}>
							<a className={styles.menuLink} href={`#${category.title}`}>
								{category?.title}
							</a>
						</li>
					))}
				</ul>
			</Container>
		</nav>
	)
}

export default Menu
