// @ts-nocheck
import { Header } from '@layouts'
import { Wrapper } from '@components'
import { Search, Restaurants, Heading, Card } from './components'

const Main = () => {
	return (
		<>
			<Header />
			<Wrapper>
				<Search />
				<Restaurants>
					<Heading />
					<Card />
				</Restaurants>
			</Wrapper>
		</>
	)
}

export default Main
