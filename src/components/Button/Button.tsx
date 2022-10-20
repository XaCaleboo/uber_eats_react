// @ts-nocheck
import cn from 'classnames'
import styles from './Button.module.pcss'

const Button = ({ children, className, variant = 'default', as = 'button', kind, ...props }) => {
	const Tag = as 

	return (
		<Tag
			className={cn(
				styles.button,
				{[styles.buttonDefault]: variant === 'default'},
				{[styles.buttonOutlined]: variant === 'outlined'},
				{[styles.buttonIcon]: kind === 'icon'},
				className
			)}
			{...props}
		>
			{children}
		</Tag>
	)
}

export default Button
