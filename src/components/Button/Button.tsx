import { PropsWithChildren, ComponentPropsWithoutRef, ElementType } from 'react'
import cn from 'classnames'
import styles from './Button.module.pcss'

type ButtonProps<T extends ElementType> = {
	className?: string,
	variant?: string,
	as?: T,
	kind?: string,
}

type ButtonComponentProps<T extends ElementType> =
	PropsWithChildren<ButtonProps<T>>
	& Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>

function Button<T extends ElementType = 'button'>({
	children = undefined,
	className = undefined,
	variant = 'default',
	// Why: https://stackoverflow.com/questions/56505560/how-to-fix-ts2322-could-be-instantiated-with-a-different-subtype-of-constraint
	// eslint-disable-next-line react/require-default-props
	as,
	kind = undefined,
	...props
}: ButtonComponentProps<T>) {
	const Tag = as ?? 'button'

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
