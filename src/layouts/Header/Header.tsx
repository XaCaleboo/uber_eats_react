// @ts-nocheck
import styled from './Header.module.pcss'
import cn from 'classnames'
import { Button } from '@components'

const Header = () => {
	return (
		<header className={cn(styled.header)}>
			<div className={cn(styled.container, styled.header__container)}>
				<a className={cn(styled.header__link)} href="#" aria-label="На главную">
					<img className={cn(styled.header__logo)} src="././././img/logo.svg" alt="UberEats" title="UberEats" />
				</a>
				<div className={cn(styled.header__navigation)}>
					<Button className={cn(styled.button, styled.button_outlined)} onclick="alert('Дратути')">Войти</Button>
					<a className={cn(styled.button, styled.button_default, styled.button_icon, styled.hidden_xs)} href="#" aria-label="Корзина">
						<span className={cn(styled.icon, styled.icon_basket)} aria-label="Иконка корзины"></span>
					</a>
				</div>
			</div>
    	</header>
	)
}

export default Header
