import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './Container.module.pcss'

type ContainerProps = {
	className?: string,
}

function Container({
	children = undefined, className = undefined, ...props
}: PropsWithChildren<ContainerProps>): JSX.Element {
	return (
		<div
			className={clsx(styles.container, className)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Container
