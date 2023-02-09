/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import {
	Container, Icon, Select, Option,
} from '@components'
import styles from './Footer.module.pcss'

function Footer(): JSX.Element {
	const [lang, setLang] = useState('ru')

	return (
		<footer className={styles.footer}>
			<Container>
				<section className={styles.footerSection} aria-label="На главную">
					<a className={styles.footerLogoLink} href="#" aria-label="На главную">
						<img className={styles.footerLogo} src="img/white-logo.svg" alt="Логотип" title="UberEats" />
					</a>
				</section>

				<section className={styles.footerSection} aria-label="Язык и навигация">
					<div className={styles.footerNavigation}>
						<div className={styles.footerColumn}>
							<section className={styles.footerSocials}>
								<Select value={lang} onChange={setLang} placeholder="Выберите язык">
									<Option value="ru" selected>Русский</Option>
									<Option value="en">English</Option>
								</Select>
								<p className={styles.footerTag}>
									<span className={styles.footerHashtag}>#</span>
									UberEats
								</p>
								<div className={styles.footerSocialsIcons}>
									<a className={styles.footerSocialsLink} href="#" aria-label="Facebook"><Icon variant="facebook" /></a>
									<a className={styles.footerSocialsLink} href="#" aria-label="Twitter"><Icon variant="twitter" /></a>
									<a className={styles.footerSocialsLink} href="#" aria-label="Instagram"><Icon variant="instagram" /></a>
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

				<section className={styles.footerSection} aria-label="Мы в App Store и Google Play">
					<div className={styles.footerSectionShops}>
						<a className={styles.footerShops} href="#" aria-label="App store">
							<img className={styles.footerShopsImage} src="img/app-store.png" alt="App Store" title="App Store" />
						</a>
						<a className={styles.footerShops} href="#" aria-label="Google Play">
							<img className={styles.footerShopsImage} src="img/google-play.png" alt="Google Play" title="Google Play" />
						</a>
					</div>
				</section>

				<section className={styles.footerSection} aria-label="Политика компании">
					<div className={styles.footerSectionTerms}>
						<p className={styles.footerTerms}>© 2017 Uber Technologies Inc.</p>
						<a className={styles.footerTerms} href="#">Обработка персональных данных</a>
						<a className={styles.footerTerms} href="#">Пользовательское соглашение</a>
					</div>
				</section>
			</Container>
		</footer>
	)
}

export default Footer
