import { ChangeEvent } from 'react'
import { Container } from '@components'
import styles from './Search.module.pcss'

type SearchProps = {
	value: string,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Search({ value, onChange }: SearchProps): JSX.Element {
	return (
		<section className={styles.search} aria-label="Поиск">
			<Container>
				<input
					className={styles.searchInput}
					name="search"
					placeholder="Поиск по ресторанам и кухням"
					type="search"
					onChange={onChange}
					value={value}
				/>
			</Container>
		</section>
	)
}

export default Search
