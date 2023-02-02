// @ts-nocheck
import { useState, Children } from "react"
import { isElementInView, isScrollable, maintainScrollVisibility, getUpdatedIndex, getActionFromKey, SelectActions } from "./utils"

const useSelect = ({ children, defaultIndex, comboRef, listboxRef, optionsRef }) => {
	const minIndex = 0
	const maxIndex = Children.count(children) - 1

	const [opened, setOpened] = useState(false)
	const [activeIndex, setActiveIndex] = useState(minIndex)
	const [selectedIndex, setSelectedIndex] = useState(defaultIndex)//findIndex from children
	const [ignoreBlur, setIgnoreBlur] = useState(false)

	const updateMenuState = (newOpenedState, callFocus = true) => {
		setOpened(newOpenedState)
	
		if (!newOpenedState && !isElementInView(comboRef.current)) {
			comboRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
		}
	
		if (callFocus) {
			comboRef.current.focus()
		}
	}

	const selectOption = (index) => {
		setSelectedIndex(index)
	}

	const onOptionChange = (index) => {
		setActiveIndex(index)
	  
		if (isScrollable(listboxRef.current)) {
			maintainScrollVisibility(optionsRef.current[index], listboxRef.current)
		}

		if (!isElementInView(optionsRef.current[index])) {
			optionsRef.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
		}
	}

	const onComboBlur = () => {
		if (ignoreBlur) {
			setIgnoreBlur(false)
			return
		}
		
		if (opened) {
			selectOption(activeIndex)
			updateMenuState(false, false)
		}
	}

	const onComboClick = () => {
		updateMenuState(!opened, false)
	}

	const onComboKeyDown = (event) => {
  		const action = getActionFromKey(event, opened)

		switch (action) {
			case SelectActions.Last:
			case SelectActions.First:
				updateMenuState(true)
			case SelectActions.Next:
			case SelectActions.Previous:
			case SelectActions.PageUp:
			case SelectActions.PageDown:
				event.preventDefault()
				return onOptionChange(
					getUpdatedIndex(activeIndex, minIndex, maxIndex, action)
				)
			case SelectActions.CloseSelect:
				event.preventDefault()
				selectOption(activeIndex)
			case SelectActions.Close:
				event.preventDefault()
				return updateMenuState(false)
			case SelectActions.Open:
				event.preventDefault()
				return updateMenuState(true)
		}
	}

	const onOptionClick = (index) => {
		return (event) => {
			event.stopPropagation()
			
			onOptionChange(index)
			selectOption(index)
			updateMenuState(false)
		}
	}

	const onOptionMouseDown = () => {
  		setIgnoreBlur(true)
	}

	return { opened, activeIndex, selectedIndex, onComboBlur, onComboClick, onComboKeyDown, onOptionClick, onOptionMouseDown }
}

export {useSelect}
