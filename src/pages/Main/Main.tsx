// @ts-nocheck
import { Header } from '@layouts'
import { Search, Restaurants, Card } from './components'

const Main = () => {

	const restaurants = [
		{
			title: 'Макдоналдс - Газетный',
			price: 'Средняя ценовая категория',
			rub: '₽₽',
			category: 'Бургеры',
			time: '25 - 35 мин',
			image: '/McD.png',
			alt: 'Макдональдс',
			imageTitle: 'Макдональдс'
		},
		{
			title: 'DimSum & Co — ЦДМ',
			price: 'Низкая ценовая категория',
			rub: '₽',
			category: 'Японская • Китайская • Азиатская',
			time: '40 - 50 мин',
			image: '/DimSum.png',
			alt: 'DimSum & Co',
			imageTitle: 'DimSum & Co'
		},
		{
			title: 'ДвижОК — Манежная',
			price: 'Низкая ценовая категория',
			rub: '₽',
			category: 'Американская • Европейская',
			time: '35 - 45 мин',
			image: '/DvizhOK.png',
			alt: 'ДвижОК',
			imageTitle: 'ДвижОК'
		},
		{
			title: 'НЯ — NHA',
			price: 'Средняя ценовая категория',
			rub: '₽₽',
			category: 'Вьетнамская',
			time: '30 - 40 мин',
			image: '/NHA.png',
			alt: 'НЯ — NHA',
			imageTitle: 'НЯ — NHA'
		},
		{
			title: 'Точка Дзы — Цветной',
			price: 'Средняя ценовая категория',
			rub: '₽₽',
			category: 'Вьетнамская',
			time: '40 - 50 мин',
			image: '/Point.png',
			alt: 'Точка Дзы',
			imageTitle: 'Точка Дзы'
		},
		{
			title: 'Cinnabon',
			price: 'Низкая ценовая категория',
			rub: '₽',
			category: 'Выпечка • Десерты • Капкейки',
			time: '25 - 35 мин',
			image: '/Cinnabon.png',
			alt: 'Cinnabon',
			imageTitle: 'Cinnabon'
		},
		{
			title: 'PIZZELOVE',
			price: 'Средняя ценовая категория',
			rub: '₽₽',
			category: 'Пицца',
			time: '15 - 25 мин',
			image: '/Pizzelove.png',
			alt: 'PIZZELOVE',
			imageTitle: 'PIZZELOVE'
		},
		{
			title: 'Zю кафе — Тверская',
			price: 'Средняя ценовая категория',
			rub: '₽₽',
			category: 'Японская',
			time: '25 - 35 мин',
			image: '/Zu.png',
			alt: 'Zю кафе',
			imageTitle: 'Zю кафе'
		},
		{
			title: 'Bar BQ Cafe — Манежная',
			price: 'Высокая ценовая категория',
			rub: '₽₽₽',
			category: 'Европейская',
			time: '30 - 40 мин',
			image: '/Barbq.png',
			alt: 'Bar BQ Cafe',
			imageTitle: 'Bar BQ Cafe'
		}
	]

	return (
		<>
			<Header />
			<Search />
			<Restaurants>
				{restaurants.map((restaurant, index) => (
					<Card 
						key={index}
						title={restaurant.title} 
						price={restaurant.price} 
						rub={restaurant.rub} 
						category={restaurant.category} 
						time={restaurant.time}
						image={restaurant.image}
						alt={restaurant.alt}
						imageTitle={restaurant.imageTitle} 
					/>
				))}
			</Restaurants>
		</>
	)
}

export default Main
