import cn from 'classnames'
import styles from './Icon.module.pcss'

type IconProps = {
	className?: string,
	variant?: string,
}

function Icon({
	className = undefined, variant = undefined, ...props
}: IconProps): JSX.Element {
	return (
		<span
			className={cn(
				styles.icon,
				{ [styles.iconBasket]: variant === 'basket' },
				{ [styles.iconFacebook]: variant === 'facebook' },
				{ [styles.iconTwitter]: variant === 'twitter' },
				{ [styles.iconInstagram]: variant === 'instagram' },
				{ [styles.iconArrow]: variant === 'arrow' },
				{ [styles.iconWorld]: variant === 'world' },
				{ [styles.iconDropdown]: variant === 'dropdown' },
				className,
			)}
			{...props}
		/>
	)
}

export default Icon
