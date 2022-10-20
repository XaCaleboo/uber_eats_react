// @ts-nocheck
import { Header } from '@layouts'
import { Container } from '@components'
import { Search, Restaurants, Heading, Card } from './components'

// const restaurants = [
// 	{
// 	  title: '...',
// 	  description: '...',
// 	},
// 	...
//   ]
  
//   const Main = (...) => (
// 	<Wrapper>
// 	  {restaurants.map(({ title, description }) => (
// 		<Card title={title} description={description} />
// 	  ))}
// 	</Wrapper>
//   )

// const restaurants = [
// 	{
// 		title: 'Макдоналдс - Газетный',
// 		price: 'Средняя ценовая категория',
// 		rub: '₽₽',
// 		category: 'Бургеры',
// 		time: '25 - 35 мин',
// 	},
// ]

// { title, price, rub, category, time }

const Main = () => {

	const restaurants = [
		{
			title: 'Макдоналдс - Газетный',
			price: 'Средняя ценовая категория',
			rub: '₽₽',
			category: 'Бургеры',
			time: '25 - 35 мин',
		},
		{
			title: 'vv',
			price: 'sss',
			rub: 'aa',
			category: 'ww',
			time: 'bf',
		},
	]

	return (
		<>
			<Header />
			<Container>
				<Search />
				<Restaurants>
					<Heading />
						{restaurants.map((restaurant, index) => (
							<Card 
								key={index}
								title={restaurant.title} 
								price={restaurant.price} 
								rub={restaurant.rub} 
								category={restaurant.category} 
								time={restaurant.time} 
							/>
						))}
				</Restaurants>
			</Container>
		</>
	)
}

export default Main
