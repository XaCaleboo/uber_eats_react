// @ts-nocheck
import cn from 'classnames'
import styles from './Icon.module.pcss'

const Icon = ({ children, className, variant, ...props }) => {
	return (
		<span
			className={cn(
				styles.icon,
				{[styles.iconBasket]: variant === 'basket'},
				{[styles.iconFacebook]: variant === 'facebook'},
				{[styles.iconTwitter]: variant === 'twitter'},
				{[styles.iconInstagram]: variant === 'instagram'},
				{[styles.iconArrow]: variant === 'arrow'},
				{[styles.iconWorld]: variant === 'world'},
				{[styles.iconDropdown]: variant === 'dropdown'},
				className
			)}
			{...props}
		>
		</span>
	)
}

export default Icon
