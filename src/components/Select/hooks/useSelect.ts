import {
	useState, RefObject, MutableRefObject, Dispatch, SetStateAction, KeyboardEvent, MouseEvent,
} from 'react'
import {
	isElementInView, isScrollable, maintainScrollVisibility, getUpdatedIndex, getActionFromKey,
	SelectActions,
} from '../utils'

export type OptionItem = {
	value: string,
	label: string,
}

type UseSelectProps = {
	options: OptionItem[],
	comboRef: RefObject<HTMLButtonElement>,
	listboxRef: RefObject<HTMLDivElement>,
	optionsRef: MutableRefObject<HTMLButtonElement[]>,
	value?: string,
	onChange: Dispatch<SetStateAction<string | undefined>>
}

const useSelect = ({
	options, comboRef, listboxRef, optionsRef, value, onChange,
}: UseSelectProps) => {
	const minIndex = 0
	const maxIndex = options.length - 1

	const [opened, setOpened] = useState(false)
	const [activeIndex, setActiveIndex] = useState(minIndex)
	const [selectedIndex, setSelectedIndex] = useState(() => (
		options.findIndex((element) => element.value === value)
	))
	const [ignoreBlur, setIgnoreBlur] = useState(false)

	const updateMenuState = (newOpenedState: SetStateAction<boolean>, callFocus = true) => {
		setOpened(newOpenedState)

		if (!newOpenedState && comboRef.current !== null && !isElementInView(comboRef.current)) {
			comboRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
		}

		if (callFocus && comboRef.current !== null) {
			comboRef.current.focus()
		}
	}

	const selectOption = (index: number) => {
		setSelectedIndex(index)
		onChange(options[index].value)
	}

	const onOptionChange = (index: number) => {
		setActiveIndex(index)

		if (listboxRef.current !== null && isScrollable(listboxRef.current)) {
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

	const onComboKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
		const action = getActionFromKey(event, opened)

		switch (action) {
			case SelectActions.Last:
			case SelectActions.First:
				updateMenuState(true)
				break
			case SelectActions.Next:
			case SelectActions.Previous:
			case SelectActions.PageUp:
			case SelectActions.PageDown:
				event.preventDefault()
				return onOptionChange(
					getUpdatedIndex(activeIndex, minIndex, maxIndex, action),
				)
			case SelectActions.CloseSelect:
				event.preventDefault()
				selectOption(activeIndex)
				break
			case SelectActions.Close:
				event.preventDefault()
				return updateMenuState(false)
			case SelectActions.Open:
				event.preventDefault()
				return updateMenuState(true)
			default:
				break
		}
		return undefined
	}

	const onOptionClick = (index: number) => (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation()

		onOptionChange(index)
		selectOption(index)
		updateMenuState(false)
	}

	const onOptionMouseDown = () => {
		setIgnoreBlur(true)
	}

	return {
		opened,
		activeIndex,
		selectedIndex,
		onComboBlur,
		onComboClick,
		onComboKeyDown,
		onOptionClick,
		onOptionMouseDown,
	}
}

export default useSelect
