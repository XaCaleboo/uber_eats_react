// @ts-nocheck
import cn from 'classnames'
import styles from './Container.module.pcss'

const Container = ({ children, className, ...props }) => {
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
