import { Button, Icon } from '@components'
import styles from './ToTop.module.pcss'

function ToTop(): JSX.Element {
	const scrollUp = () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	return (
		<Button
			className={styles.toTop}
			kind="icon"
			onClick={scrollUp}
		>
			<Icon variant="arrow" aria-label="Скролл вверх" />
		</Button>
	)
}

export default ToTop
