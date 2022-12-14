// @ts-nocheck
import { useEffect, useState } from 'react'

import { Header, Footer } from '@layouts'
import { Search, Restaurants } from './components'

const Main = () => {
	const [restaurants, setRestaurants] = useState([])

	useEffect(() => {
		const controller = new AbortController();

		fetch('/api/restaurants.json', { signal: controller.signal })
			.then((response) => response.json())
			.then((data) => setRestaurants(data))

		return () => {
			controller.abort()
		}
	}, [])

	return (
		<>
			<Header />
			<Search />
			<Restaurants items={restaurants} />
			<Footer />
		</>
	)
}

export default Main
