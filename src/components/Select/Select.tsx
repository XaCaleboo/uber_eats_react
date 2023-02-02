// @ts-nocheck
import { useState, useRef, Children, isValidElement, cloneElement, useEffect } from 'react'
import { useSelect } from './useSelect';
import uuid from 'react-uuid';
import { Icon } from '@components'
import styles from './Select.module.pcss'
import cn from 'classnames'

const Select = ({ defaultIndex, children }) => {
	const comboRef = useRef(null)
	const listboxRef = useRef(null)
	const optionsRef = useRef([])

	useEffect(() => {
		console.log(`children`, children)
		// Children.map(children, (child, index) => {
		// 	console.log(`child ${index}`, child)
		// })
	},[children])

	const { 
		opened, 
		activeIndex, 
		selectedIndex,
		onComboBlur, 
		onComboClick, 
		onComboKeyDown,
		onOptionClick,
		onOptionMouseDown,
	} = useSelect({ children, defaultIndex, comboRef, listboxRef, optionsRef })

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
			>
				<Icon variant='world' />
				{children[selectedIndex].props.children}
				{/* {options[selectedIndex]} */}
				<Icon variant='dropdown' />
			</button>
			<div 
				className={cn(styles.selectListbox, {[styles.selectListboxHidden]: !opened })}
				id={`${idBase}-listbox`}
				role="listbox"
				ref={listboxRef}
				tabIndex="-1"
			>
				{Children.map(children, (child, index) => {
					if (isValidElement(child)) {
						return cloneElement(child, {
							isActive: activeIndex === index,
							id: `${idBase}-${index}`,
							ref: (element) => optionsRef.current.push(element),
							isSelected: selectedIndex === index,
							onClick: onOptionClick(index),
							onMouseDown: onOptionMouseDown,
						})
					}

					return child
				})}
			</div>
		</div>
	)
}

export default Select
