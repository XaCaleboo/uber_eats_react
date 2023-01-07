// @ts-nocheck
import { useState } from 'react'
import { Icon } from '@components'
import styles from './Select.module.pcss'

const Select = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState('Русский')

	const options = ["Русский", "English"];

	const toggling = () => setIsOpen(!isOpen)

	const onOptionClick = value => () => {
		setSelectedOption(value);
    	setIsOpen(false);
	}

	return (
		<div className={styles.select}>
			
			<button 
				className={styles.selectChosen} 
				onClick={toggling} 
				aria-controls="listbox1" 
				aria-expanded="false" 
				aria-haspopup="listbox"
				role="combobox"
				tabindex="0"
			>
				<Icon variant='world' />
				{selectedOption}
				<Icon variant='dropdown' />
			</button>

			{isOpen && 
				<div 
					className={styles.selectDropdown}
					role="listbox"
					tabindex="-1"
				>
					{options.map(option => (
						<button 
							className={styles.selectItem}
							onClick={onOptionClick(option)}
							key={Math.random()}
						>
							{option}
						</button>
              		))}
				</div>
			}
		</div>
	)
}

export default Select
