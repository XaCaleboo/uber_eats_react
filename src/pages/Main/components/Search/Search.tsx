// @ts-nocheck
import styles from './Search.module.pcss'
import cn from 'classnames'
import { Wrapper } from '@components'

const Search = () => {
	return (
        <Wrapper>
            <section className={cn(styles.searchBlock)} aria-label="Поиск">
                <form className={cn(styles.search)} action="" method="GET">
                    <input className={cn(styles.searchInput)} name="search" aria-label="Поиск" placeholder="Поиск по ресторанам и кухням" type="search" />
                </form>
            </section>
        </Wrapper>
	)
}

export default Search
