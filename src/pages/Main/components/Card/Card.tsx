// @ts-nocheck
import styles from './Card.module.pcss'
import cn from 'classnames'

const Card = () => {
    return (
        <section>
            <a className={cn(styles.card)} href="#">
                <header className={cn(styles.cardDescription)}>
                    <h2 className={cn('typo', 'typo_h3')}>Макдоналдс - Газетный</h2>
                    <p className={cn('typo', 'typo_h4', 'typo_color_secondary')}>
                        <span className={cn('visually-hidden')}>Средняя ценовая категория</span>
                        <span aria-hidden="true">₽₽</span> • Бургеры
                    </p>
                    <p className={cn('typo', 'typo_h5')}>
                        25 - 35 мин
                    </p>
                </header>
                <img className={cn(styles.cardPhoto)} src="img/McD.png" alt="Макдональдс" title="Макдональдс" />
            </a>
        </section>
    )
}

export default Card