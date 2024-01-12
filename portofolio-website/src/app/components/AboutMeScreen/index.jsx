import React from 'react';
import styles from './AboutMeScreen.module.scss'
import img from '@public/icons/pixel.png'
import Image from 'next/image';
const AboutMeScreen = () => {
    return (
        <div className={styles.aboutMeWrapper}><h2>Обо мне</h2>
 <Image src={img}/>
          <div>
           
           <div>
           <h1>
              <span>Full-stack разработчик</span> в WEB & Mobile Разработке</h1></div>
            <span>Привет! Я <b>Fullstack</b> разработчик, специализирующийся на <b>React</b>, <b>Next</b> и <b>NodeJS</b>. Я использую <b>SCSS</b> для стилизации.  Кроме того, у меня есть опыт работы с <b>React Native</b> в мобильной разработке. Давайте воплотим ваши идеи в  реальность!</span>
           </div>
            </div>
    );
};

export default AboutMeScreen;
