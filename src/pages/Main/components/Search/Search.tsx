import { Container } from '@components'
import styles from './Search.module.pcss'

function Search(): JSX.Element {
	return (
		<section className={styles.search} aria-label="Поиск">
			<Container>
				<input
					className={styles.searchInput}
					name="search"
					placeholder="Поиск по ресторанам и кухням"
					type="search"
				/>
			</Container>
		</section>
	)
}

export default Search
