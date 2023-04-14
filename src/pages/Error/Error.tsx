import styles from './Error.module.pcss'

function Error(): JSX.Element {
	return (
		<h1 className={styles.error}> Something went wrong</h1>
	)
}

export default Error
