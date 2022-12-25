// @ts-nocheck
import { Container } from '@components'
import { Card } from '../../components'
import styles from './Restaurants.module.pcss'

const Restaurants = ({ items }) => {
    return (
        <section className={styles.restaurants} aria-label="Рестораны">
            <Container>
                <h1 className={styles.restaurantsHeading}>
                    Рестораны в Москве
                </h1>
                <div className={styles.restaurantsContainer}>
                    {items.map((restaurant, index) => (
                        <Card 
                            key={index}
                            title={restaurant.title} 
                            price={restaurant.price} 
                            category={restaurant.category} 
                            time={restaurant.time}
                            image={restaurant.image}
                            alt={restaurant.alt}
                            imageTitle={restaurant.imageTitle} 
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Restaurants