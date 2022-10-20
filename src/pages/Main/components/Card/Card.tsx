// @ts-nocheck
import styles from './Card.module.pcss'

const Card = ( title, price, rub, category, time ) => {
    return (
        <section>
            <a className={styles.card} href="#">
                <header className={styles.cardDescription}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <p className={styles.cardPrice}>
                        <span className={'visually-hidden'}>{price}</span>
                        <span aria-hidden="true">{rub}</span> • {category}
                    </p>
                    <p className={styles.cardTime}>
                        {time}
                    </p>
                </header>
                <img 
                    className={styles.cardPhoto} 
                    src="img/McD.png" 
                    alt="Макдональдс" 
                    title="Макдональдс"
                />
            </a>
        </section>
    )
}

export default Card