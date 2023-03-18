import {
	forwardRef, PropsWithChildren, ButtonHTMLAttributes, MouseEvent,
} from 'react'
import clsx from 'clsx'
import styles from './Option.module.pcss'

type OptionPropsRaw = {
	isActive?: boolean,
	isSelected?: boolean,
	onClick: (event: MouseEvent<HTMLButtonElement>) => void,
	onMouseDown: () => void,
}

export type OptionProps =
	PropsWithChildren<OptionPropsRaw> &
	ButtonHTMLAttributes<HTMLButtonElement>

const Option = forwardRef<HTMLButtonElement, OptionProps>(({
	children, isActive, isSelected, ...props
}, ref): JSX.Element => (
	<button
		className={clsx(styles.option, { [styles.optionActive]: isActive })}
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
}

Option.displayName = 'Option'

export default Option
