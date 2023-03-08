import {
	forwardRef, PropsWithChildren, ButtonHTMLAttributes, MouseEvent,
} from 'react'
import cn from 'classnames'
import styles from './Option.module.pcss'

type OptionPropsRaw = {
	isActive?: boolean,
	isSelected?: boolean,
	selected?: boolean,
	onClick: (event: MouseEvent<HTMLButtonElement>) => void,
	onMouseDown: () => void,
}

export type OptionProps =
	PropsWithChildren<OptionPropsRaw> &
	ButtonHTMLAttributes<HTMLButtonElement>

const Option = forwardRef<HTMLButtonElement, OptionProps>(({
	children, isActive, isSelected, selected, ...props
}, ref): JSX.Element => (
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
