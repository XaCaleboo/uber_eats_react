// @ts-nocheck
import styles from './Header.module.pcss'
import cn from 'classnames'
import { Button, Wrapper, Icon } from '@components'

const Header = () => {
	return (
		<header className={cn(styles.header)}>
			<Wrapper>
				<div className={cn(styles.headerContainer)}>
					<a className={cn(styles.headerLink)} href="#" aria-label="На главную">
						<img className={cn(styles.headerLogo)} src="../../../img/logo.svg" alt="UberEats" title="UberEats" />
					</a>
					<div className={cn(styles.headerNavigation)}>
						<Button variant='outlined' onClick={() => alert('Hello')}>Войти</Button>
						<Button as='a' variant='default' kind='icon' className={cn('hidden_xs')} href="#" aria-label="Корзина">
							<Icon variant='basket' aria-label="Иконка корзины" />
						</Button>
					</div>
				</div>
			</Wrapper>
    	</header>
	)
}

export default Header
