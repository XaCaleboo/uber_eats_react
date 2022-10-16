// @ts-nocheck
import cn from 'classnames'
import styles from './Button.module.pcss'

const Button = ({ children, className, variant, as, kind, ...props }) => {
	const Tag = as ?? 'button'

	return (
		<Tag
			className={cn(
				styles.button,
				{[styles.buttonDefault]: variant === 'default'},
				{[styles.buttonOutlined]: variant === 'outlined'},
				{[styles.buttonButtonIcon]: kind === 'icon'},
				className)}
			{...props}
		>
			{children}
		</Tag>
	)
}

export default Button
