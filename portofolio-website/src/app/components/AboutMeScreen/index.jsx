import React from 'react';
import styles from './AboutMeScreen.module.scss'
import img from '@public/icons/pixel.png'
import Image from 'next/image';
const AboutMeScreen = () => {
    return (
        <div className={styles.aboutMeWrapper}><h2>Обо мне</h2>

          <div>       <Image src={img}/>
        <h1>Full-stack разработчик в WEB & Mobile Разработке</h1>
</div>
                            </div>
    );
};

export default AboutMeScreen;
