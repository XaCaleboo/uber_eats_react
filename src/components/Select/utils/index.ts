import { KeyboardEvent } from 'react'

export enum SelectActions {
	Close,
	CloseSelect,
	First,
	Last,
	Next,
	Open,
	PageDown,
	PageUp,
	Previous,
	Select,
	Type,
}

export const isElementInView = (element: HTMLElement) => {
	const bounding = element.getBoundingClientRect()

	return (
		bounding.top >= 0
		&& bounding.left >= 0
		&& bounding.bottom
		<= (window.innerHeight || document.documentElement.clientHeight)
		&& bounding.right
		<= (window.innerWidth || document.documentElement.clientWidth)
	)
}

export const isScrollable = (element: HTMLElement) => element
	&& element.clientHeight < element.scrollHeight

export const maintainScrollVisibility = (
	activeElement: HTMLElement,
	scrollParent: HTMLElement,
) => {
	const { offsetHeight, offsetTop } = activeElement
	const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent

	const isAbove = offsetTop < scrollTop
	const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight

	if (isAbove) {
		scrollParent.scrollTo(0, offsetTop)
	} else if (isBelow) {
		scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight)
	}
}

export const getUpdatedIndex = (
	currentIndex: number,
	minIndex: number,
	maxIndex: number,
	action: number,
) => {
	const pageSize = 10

	switch (action) {
		case SelectActions.First:
			return 0
		case SelectActions.Last:
			return maxIndex
		case SelectActions.Previous:
			return Math.max(minIndex, currentIndex - 1)
		case SelectActions.Next:
			return Math.min(maxIndex, currentIndex + 1)
		case SelectActions.PageUp:
			return Math.max(minIndex, currentIndex - pageSize)
		case SelectActions.PageDown:
			return Math.min(maxIndex, currentIndex + pageSize)
		default:
			return currentIndex
	}
}

export const getActionFromKey = (event: KeyboardEvent<HTMLButtonElement>, menuOpen: boolean) => {
	const { key, altKey } = event
	const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' ']

	if (!menuOpen && openKeys.includes(key)) {
		return SelectActions.Open
	}

	if (key === 'Home') {
		return SelectActions.First
	}

	if (key === 'End') {
		return SelectActions.Last
	}

	if (menuOpen) {
		if (key === 'ArrowUp' && altKey) {
			return SelectActions.CloseSelect
		} if (key === 'ArrowDown' && !altKey) {
			return SelectActions.Next
		} if (key === 'ArrowUp') {
			return SelectActions.Previous
		} if (key === 'PageUp') {
			return SelectActions.PageUp
		} if (key === 'PageDown') {
			return SelectActions.PageDown
		} if (key === 'Escape') {
			return SelectActions.Close
		} if (key === 'Enter' || key === ' ') {
			return SelectActions.CloseSelect
		}
	}

	return undefined
}
