import myLogo from '@public/myLogo.svg'
import Image from 'next/image'
import styles from './Header.module.scss'
const Header = () => {
	return (
		<header>
			<nav>
				<ul className={styles.rootHeader}>
					<div className={styles.IconLogo}>
						<Image src={myLogo} />
						<span>AmexDev</span>
					</div>
					<div className={styles.ListLink}>
						<li>
							<a href='#'>Домой</a>
						</li>
						<li>
							<a href='#'>Обо мне</a>
						</li>
						<li>
							<a href='#'>Сервисы</a>
						</li>
						<li>
							<a href='#'>Блог</a>
						</li>
						<li>
							<a href='#'>Контакты</a>
						</li>
						<button>Напиши мне</button>
					</div>
				</ul>
			</nav>
		</header>
	)
}

export default Header
