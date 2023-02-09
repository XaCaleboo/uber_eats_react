import { ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Option.module.pcss'

type OptionProps = {
	isActive?: boolean,
	isSelected?: boolean,
	value: string,
	selected?: boolean
}

const Option = forwardRef(({
	children, isActive, isSelected, value, selected, ...props
}: PropsWithChildren<OptionProps>, ref: ForwardedRef<HTMLButtonElement>) => (
	<button
		className={cn(styles.option, { [styles.optionActive]: isActive })}
		role="option"
		aria-selected={isSelected}
		ref={ref}
		type="button"
		{...props}
	>
		{children}
	</button>
))

Option.defaultProps = {
	children: undefined,
	isActive: false,
	isSelected: false,
	selected: false,
}

Option.displayName = 'Option'

export default Option
