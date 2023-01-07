// @ts-nocheck
import styles from './Header.module.pcss'
import { Button, Container, Icon } from '@components'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.headerContainer}>
					<a className={styles.headerLink} href="#" aria-label="На главную">
						<img 
							className={styles.headerLogo} 
							src="/img/logo.svg" 
							alt="UberEats" 
							title="UberEats"
						/>
					</a>
					<div className={styles.headerNavigation}>
						<Button variant='outlined' onClick={() => alert('Hello')}>Войти</Button>
						<Button 
							as='a' 
							kind='icon' 
							className={'hidden_xs'} 
							href="#" 
							aria-label="Корзина"
						>
							<Icon variant='basket' aria-label="Иконка корзины" />
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
