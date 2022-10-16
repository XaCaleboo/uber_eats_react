// @ts-nocheck
import cn from 'classnames'
import styles from './Wrapper.module.pcss'

const Wrapper = ({ children, className, ...props }) => {
	return (
		<div
			className={cn(styles.container, className)}
			{...props}
		>
			{children}
		</div>
	)
}

export default Wrapper
