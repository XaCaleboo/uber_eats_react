import { Container } from '@components'

import styles from './Search.module.pcss'

function Search(): JSX.Element {
	return (
		<section className={styles.searchBlock} aria-label="Поиск">
			<Container>
				<form className={styles.search} action="" method="GET">
					<input
						className={styles.searchInput}
						name="search"
						aria-label="Поиск"
						placeholder="Поиск по ресторанам и кухням"
						type="search"
					/>
				</form>
			</Container>
		</section>
	)
}

export default Search
