// @ts-nocheck
import { forwardRef } from 'react'
import cn from 'classnames'
import styles from './Option.module.pcss'


const Option = forwardRef(({ children, isActive, isSelected, ...props }, ref) => {
	return (
		<button 
			className={cn(styles.option, {[styles.optionActive]: isActive})}
			role="option"
			aria-selected={isSelected}
			ref={ref}
			{...props}
		>
			{children}
		</button>
	)
})

export default Option
