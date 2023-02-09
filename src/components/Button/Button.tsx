import { PropsWithChildren, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Button.module.pcss'

type ButtonProps = {
	className?: string,
	variant?: string,
	as?: keyof JSX.IntrinsicElements,
	kind?: string
}

function Button({
	children = undefined, className = undefined, variant = 'default', as = 'button', kind = undefined, ...props
}: PropsWithChildren<ButtonProps & HTMLAttributes<HTMLOrSVGElement>>) {
	const Tag = as

	return (
		<Tag
			className={cn(
				styles.button,
				{ [styles.buttonDefault]: variant === 'default' },
				{ [styles.buttonOutlined]: variant === 'outlined' },
				{ [styles.buttonIcon]: kind === 'icon' },
				className,
			)}
			{...props}
		>
			{children}
		</Tag>
	)
}

export default Button
