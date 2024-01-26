'use client'
import img from '@public/icons/pixel.png'
import Image from 'next/image'
import React from 'react'
import { awards, edu, skills } from './AboutMeData'
import styles from './AboutMeScreen.module.scss'

const AboutMeScreen = () => {
	const [skill, setSkill] = React.useState('skill')
	return (
		<div className={styles.wrapperRoot}>
			<div>
				<h2 className={styles.aboutMeTitle}>Обо мне</h2>
			</div>
			<div className={styles.aboutMeWrapper}>
				<div className={styles.ImageBlock}>
					<div className={styles.myPhoto}>
						<Image src={img} />
					</div>
				</div>
				<div className={styles.textWrapper}>
					<div>
						<h1>
							<span>Full-stack разработчик</span> в WEB & Mobile Разработке
						</h1>
					</div>
					<span>
						Привет! Я <b>Fullstack</b> разработчик, специализирующийся на{' '}
						<b>React</b>, <b>Next</b> и <b>NodeJS</b>. Я использую <b>SCSS</b>{' '}
						для стилизации. Кроме того, у меня есть опыт работы с{' '}
						<b>React Native</b> в мобильной разработке. Давайте воплотим ваши
						идеи в реальность!
					</span>
					<div className={styles.AboutMeBtns}>
						<button
							onClick={() => {
								setSkill('skill')
							}}
						>
							Навыки
						</button>
						<button
							onClick={() => {
								setSkill('awards')
							}}
						>
							Награды
						</button>
						<button
							onClick={() => {
								setSkill('edu')
							}}
						>
							Образование
						</button>
					</div>
					{skill == 'skill' &&
						skills.map(element => {
							return (
								<div className={styles.rootSkills}>
									<span>{element.name}</span>
									<div className={styles.loader_skills}>
										<div
											style={{
												width: `${element.skill_count}%`,
												height: '19.386px',
												borderRadius: '10px',
												background:
													'linear-gradient(270deg, #07F 0.59%, #00489A 99.99%)',
											}}
										></div>
									</div>
								</div>
							)
						})}
					{skill == 'awards' &&
						awards.map(element => {
							return <p className={styles.paragraphAwards}>{element.name}</p>
						})}
					{skill == 'edu' &&
						edu.map(element => {
							return (
								<div>
									<p className={styles.paragraphAwards}>{element.name_edu}</p>
									<p className={styles.paragraphAwards}>{element.my_edu}</p>
								</div>
							)
						})}
				</div>
			</div>
		</div>
	)
}

export default AboutMeScreen
