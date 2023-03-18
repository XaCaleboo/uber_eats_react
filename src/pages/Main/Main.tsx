import { useEffect, useState } from 'react'

import { Search, Restaurants } from './components'

function Main(): JSX.Element {
	const [restaurants, setRestaurants] = useState([])

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
			<Search />
			<Restaurants items={restaurants} />
		</>
	)
}

export default Main
