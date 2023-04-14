import { useEffect, useState } from 'react'
import { RouteComponentProps, DefaultParams } from 'wouter'
import { Jumbotron, Menu, Dishes } from './components'

function Restaurant({ params }: RouteComponentProps<DefaultParams>): JSX.Element {
	const [restaurant, setRestaurant] = useState()

	useEffect(() => {
		const controller = new AbortController()

		fetch(`/api/restaurants/${params.id}.json`, { signal: controller.signal })
			.then((response) => response.json())
			.then((data) => setRestaurant(data))

		return () => {
			controller.abort()
		}
	}, [])

	return (
		<>
			<Jumbotron items={restaurant} />
			<Menu items={restaurant} />
			<Dishes items={restaurant} />
		</>
	)
}

export default Restaurant
