import { Container } from '@components'
import styles from './Jumbotron.module.pcss'

function Jumbotron(): JSX.Element {
	return (
		<section className={styles.jumbotron}>
			<img className={styles.jumbotronImage} src="/img/jumbotron.png" alt="Трактир Пушкин" />
			<Container>
				<div className={styles.jumbotronCard}>
					<h1 className={styles.jumbotronHeading}>Трактир «Пушкин»</h1>
					<div className={styles.jumbotronDescription}>
						<p className={styles.jumbotronCategory}>
							<span className="visually-hidden">Высокая ценовая категория</span>
							<span aria-hidden="true">₽₽₽</span>
							{' '}
							• Европейская
						</p>
						<div className={styles.jumbotronTime}>40 - 50 мин</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Jumbotron
