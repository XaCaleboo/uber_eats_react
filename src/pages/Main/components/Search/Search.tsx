// @ts-nocheck
import styles from './Search.module.pcss'

const Search = () => {
	return (
        <section className={styles.searchBlock} aria-label="Поиск">
            <form className={styles.search} action="" method="GET">
                <input 
                    className={styles.searchInput} 
                    name="search" aria-label="Поиск" 
                    placeholder="Поиск по ресторанам и кухням" 
                    type="search" 
                />
            </form>
        </section>
	)
}

export default Search
