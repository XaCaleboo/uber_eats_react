import { useEffect, useMemo, useState } from 'react'
import type { Restaurant } from './types'
import { Search, Restaurants } from './components'

function Main(): JSX.Element {
	const [restaurants, setRestaurants] = useState<Array<Restaurant>>([])
	const [search, setSearch] = useState<string>('')
	const filteredRestaurants = useMemo<Array<Restaurant>>(() => (
		restaurants.filter(({ title }: Restaurant) => (
			title.toLowerCase().includes(search.toLowerCase())
		))
	), [restaurants, search])

	useEffect(() => {
		const controller = new AbortController()

		fetch('/api/restaurants.json', { signal: controller.signal })
			.then((response) => response.json())
			.then((data) => setRestaurants(data))

		return () => {
			controller.abort()
		}
	}, [])

	return (
		<>
			<Search
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
			<Restaurants items={filteredRestaurants} />
		</>
	)
}

export default Main
