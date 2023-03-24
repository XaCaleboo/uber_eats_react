import { Link } from 'wouter'
import { Container } from '@components'
import clsx from 'clsx'
import styles from './Menu.module.pcss'

function Menu(): JSX.Element {
	return (
		<nav className={clsx(styles.menu, 'visually-hidden_xs', 'visually-hidden_sm')}>
			<Container>
				<ul className={styles.menuContainer}>
					<li className={styles.menuItem}><Link className={styles.menuLink} href="/">Закуски</Link></li>
					<li className={styles.menuItem}><Link className={styles.menuLink} href="/">Салаты</Link></li>
					<li className={styles.menuItem}><Link className={styles.menuLink} href="/">Супы</Link></li>
					<li className={styles.menuItem}><Link className={styles.menuLink} href="/">Горячие блюда</Link></li>
					<li className={styles.menuItem}><Link className={styles.menuLink} href="/">Гарниры</Link></li>
					<li className={styles.menuItem}><Link className={styles.menuLink} href="/">Десерты</Link></li>
				</ul>
			</Container>
		</nav>
	)
}

export default Menu
