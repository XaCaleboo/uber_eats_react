// @ts-nocheck
import styles from './Restaurants.module.pcss'

const Restaurants = ({ children }) => {
    return (
        <section className={styles.restaurantsBlock} aria-label="Рестораны">
            {children}
        </section>
    )
}

export default Restaurants