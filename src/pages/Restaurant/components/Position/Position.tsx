import { Link } from 'wouter'
import clsx from 'clsx'
import type { Positions } from '@pages/Restaurant/types'
import styles from './Position.module.pcss'

function Position({
	title, addition, price, img,
}: Positions): JSX.Element {
	return (
		<section>
			<Link className={styles.positions} href="/">
				<div className={styles.postionsDescription}>
					<h3 className={clsx('overflow', styles.positionsTitle)}>
						{title}
					</h3>
					<p className={clsx('overflow', styles.positionsAddition)}>
						{addition}
					</p>
				</div>
				<p className={clsx('overflow', styles.positionsPrice)}>
					{`${price} ₽`}
				</p>
				<img className={styles.positionsImage} src={img} alt={title} title={title} />
			</Link>
		</section>
	)
}

export default Position
