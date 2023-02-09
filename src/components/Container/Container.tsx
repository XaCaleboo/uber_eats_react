import { PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Container.module.pcss'

type ContainerProps = {
	className?: string,
}

function Container({
	children = undefined, className = undefined, ...props
}: PropsWithChildren<ContainerProps>): JSX.Element {
	return (
		<div
			className={cn(styles.container, className)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Container
