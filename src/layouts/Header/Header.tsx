/* eslint-disable no-alert */
import { Button, Container, Icon } from '@components'
import { Link } from 'wouter'
import styles from './Header.module.pcss'

function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.headerContainer}>
					<Link href="/">
						<a className={styles.headerLink} href="/" aria-label="На главную">
							<img
								className={styles.headerLogo}
								src="/img/logo.svg"
								alt="UberEats"
								title="UberEats"
							/>
						</a>
					</Link>
					<div className={styles.headerNavigation}>
						<Button variant="outlined" onClick={() => alert('Hello')}>Войти</Button>
						<Button
							as="a"
							kind="icon"
							className="hidden_xs"
							href="#"
							aria-label="Корзина"
						>
							<Icon variant="basket" aria-label="Иконка корзины" />
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
