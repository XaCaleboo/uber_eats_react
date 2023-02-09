import {
	useState, useRef, Children, cloneElement,
} from 'react'
import cn from 'classnames'
import uuid from 'react-uuid'
import { Icon } from '@components'
import { useSelect } from './hooks'
import styles from './Select.module.pcss'

function Select({
	children, value, onChange, placeholder,
}) {
	const comboRef = useRef(null)
	const listboxRef = useRef(null)
	const optionsRef = useRef([])

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
		children, comboRef, listboxRef, optionsRef, value, onChange,
	})

	const [idBase] = useState(uuid())

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
				tabIndex="0"
				onBlur={onComboBlur}
				onClick={onComboClick}
				onKeyDown={onComboKeyDown}
				type="button"
			>
				<Icon variant="world" />
				{children[selectedIndex]?.props?.children ?? placeholder}
				<Icon variant="dropdown" />
			</button>
			<div
				className={cn(styles.selectListbox, { [styles.selectListboxHidden]: !opened })}
				id={`${idBase}-listbox`}
				role="listbox"
				ref={listboxRef}
				tabIndex="-1"
			>
				{Children
					.toArray(children)
					.filter((element) => element.type.displayName === 'Option')
					.map((child, index) => cloneElement(child, {
						isActive: activeIndex === index,
						id: `${idBase}-${index}`,
						ref: (element) => optionsRef.current.push(element),
						isSelected: selectedIndex === index,
						onClick: onOptionClick(index),
						onMouseDown: onOptionMouseDown,
					}))}
			</div>
		</div>
	)
}

export default Select
