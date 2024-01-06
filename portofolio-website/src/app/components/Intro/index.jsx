import iconDownload from '@public/icons/icon-download.svg'

import pixel from '@public/icons/pixel.png'
import Image from 'next/image'
import styles from './Intro.module.scss'
const Intro = () => {
	return (
		<div className={styles.introWrapper}>
			<div className={styles.introAboutMe}>
				<div className={styles.introInnerAboutMe}>
					<span>Добро пожаловать!</span>
					<span className={styles.introInnerMy}>Hi I'm</span>
					<span className={styles.introInnerName}>Amet Seidaliev</span>
					<span className={styles.introInnerMyProfession}>
						Web Developer
					</span>
					<div className={styles.aboutMeSubtitle}>
						<p>
							При сотрудничестве с профессионалами, агентство
							гарантирует услуги наивысшего качества.
						</p>
					</div>
				</div>
				<div className={styles.aboutMeBtns}>
					<button>Обращайтесь ко мне</button>
					<button>
						<span>Скачать CV</span>
						<Image src={iconDownload} />
					</button>
				</div>
			</div>
			<div className={styles.myPhoto} >
				<Image src={pixel} />
			</div>
		</div>
	)
}

export default Intro
