import {
	useState,
	useRef,
	Dispatch,
	SetStateAction,
	ForwardRefExoticComponent,
	RefAttributes,
	ButtonHTMLAttributes,
	PropsWithChildren,
} from 'react'
import clsx from 'clsx'
import uuid from 'react-uuid'
import { Icon } from '@components'
import OptionComponent, { OptionProps } from './Option'
import { useSelect, OptionItem } from './hooks'
import styles from './Select.module.pcss'

type SelectProps = {
	options: OptionItem[],
	getOptionComponent: ForwardRefExoticComponent<
	PropsWithChildren<OptionProps> & // make indents - search for plugin
	RefAttributes<HTMLButtonElement> &
	ButtonHTMLAttributes<HTMLButtonElement>
	>,
	value?: string,
	onChange: Dispatch<SetStateAction<string | undefined>>,
	placeholder: string,
}

function Select({
	value = undefined, onChange, placeholder, options = [], getOptionComponent = OptionComponent,
}: SelectProps): JSX.Element {
	const comboRef = useRef<HTMLButtonElement>(null)
	const listboxRef = useRef<HTMLDivElement>(null)
	const optionsRef = useRef<HTMLButtonElement[]>([])

	const {
		opened,
		activeIndex,
		selectedIndex,
		onComboBlur,
		onComboClick,
		onComboKeyDown,
		onOptionClick,
		onOptionMouseDown,
	} = useSelect({
		options, comboRef, listboxRef, optionsRef, value, onChange,
	})

	const [idBase] = useState<string>(uuid())

	const Option = getOptionComponent

	return (
		<div className={styles.select}>
			<button
				className={styles.selectCombobox}
				id={idBase}
				aria-controls={`${idBase}-listbox`}
				aria-expanded={opened}
				aria-haspopup="listbox"
				aria-activedescendant={opened ? `${idBase}-${activeIndex}` : ''}
				role="combobox"
				ref={comboRef}
				tabIndex={0}
				onBlur={onComboBlur}
				onClick={onComboClick}
				onKeyDown={onComboKeyDown}
				type="button"
			>
				<Icon variant="world" />
				{ options[selectedIndex]?.label ?? placeholder }
				<Icon variant="dropdown" />
			</button>
			<div
				className={clsx(styles.selectListbox, { [styles.selectListboxHidden]: !opened })}
				id={`${idBase}-listbox`}
				role="listbox"
				ref={listboxRef}
				tabIndex={-1}
			>
				{options.map((item, index) => (
					<Option
						// eslint-disable-next-line react/no-array-index-key
						key={index}
						isActive={activeIndex === index}
						id={`${idBase}-${index}`}
						ref={(element: never) => optionsRef.current.push(element)}
						isSelected={selectedIndex === index}
						onClick={onOptionClick(index)}
						onMouseDown={onOptionMouseDown}
					>
						{item.label}
					</Option>
				))}
			</div>
		</div>
	)
}

export default Select
