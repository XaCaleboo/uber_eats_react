// @ts-nocheck
import styles from './Footer.module.pcss'
import { Container, Icon, Select } from '@components'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<section className={styles.footerSection} aria-label="На главную">
					<a className={styles.footerLogoLink} href="#" aria-label="На главную">
						<img className={styles.footerLogo} src="img/white-logo.svg" alt="Логотип" title="UberEats"/>
					</a>
				</section>

				<section className={styles.footerSection} aria-label="Язык и навигация">
					<div className={styles.footerNavigation}>
						<div className={styles.footerColumn}>
							<section className={styles.footerSocials}>
								<Select />
								<p className={styles.footerTag}>
									<span className={styles.footerHashtag}>#</span>UberEats
								</p>
								<div className={styles.footerSocialsIcons}>
									<a className={styles.footerSocialsLink} href="#" aria-label="Facebook"><Icon variant='facebook'/></a>
									<a className={styles.footerSocialsLink} href="#" aria-label="Twitter"><Icon variant='twitter'/></a>
									<a className={styles.footerSocialsLink} href="#" aria-label="Instagram"><Icon variant='instagram'/></a>
								</div>
							</section>
						</div>
						<div className={styles.footerColumn}>
							<a className={styles.footerLink} href="#">Об UberEats</a>
							<a className={styles.footerLink} href="#">Станьте партнером по доставке</a>
							<a className={styles.footerLink} href="#">Станьте партнером-рестораном</a>
						</div>
						<div className={styles.footerColumn}>
							<a className={styles.footerLink} href="#">Все города</a>
							<a className={styles.footerLink} href="#">Цены</a>
							<a className={styles.footerLink} href="#">Помощь</a>
							<a className={styles.footerLink} href="#">FAQs</a>
						</div>
					</div>
				</section>
			</Container>
		</footer>
	)
}

export default Footer
