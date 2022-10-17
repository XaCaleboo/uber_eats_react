// @ts-nocheck
import styles from './Restaurants.module.pcss'
import cn from 'classnames'

const Restaurants = ({ children }) => {
    return (
        <section className={cn(styles.restaurantsBlock)} aria-label="Рестораны">
            {children}
        </section>
    )
}

export default Restaurants