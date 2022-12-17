// @ts-nocheck
import { Container } from '@components'

import styles from './Restaurants.module.pcss'

const Restaurants = ({ children }) => {
    return (
        <section className={styles.restaurants} aria-label="Рестораны">
            <Container>
                <h1 className={styles.restaurantsHeading}>
                    Рестораны в Москве
                </h1>
                <div className={styles.restaurantsContainer}>
                    {children}
                </div>
            </Container>
        </section>
    )
}

export default Restaurants