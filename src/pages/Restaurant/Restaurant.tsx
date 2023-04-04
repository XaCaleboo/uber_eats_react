import { useEffect, useState } from 'react'
import { RouteComponentProps, DefaultParams } from 'wouter'
import { Jumbotron, Menu, Dishes } from './components'

function Restaurant({ params }: RouteComponentProps<DefaultParams>): JSX.Element {
	const [positions, setPositions] = useState([])

	useEffect(() => {
		const controller = new AbortController()

		fetch(`/api/restaurants/${params.id}.json`, { signal: controller.signal })
			.then((response) => response.json())
			.then((data) => setPositions(data))

		return () => {
			controller.abort()
		}
	}, [])

	return (
		<>
			<Jumbotron />
			<Menu />
			<Dishes items={positions} />
		</>
	)
}

export default Restaurant
