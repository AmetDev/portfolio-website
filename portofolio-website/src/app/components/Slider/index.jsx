'use client'
import React from 'react';
import Image from "next/image";
import styles from './Slider.module.scss'
import js from '@public/icons/js.png'
import react from '@public/icons/react.png'
import redux from '@public/icons/redux.png'
import  next from '@public/icons/next.png'
import sass from '@public/icons/sass.png'
import mongodb from '@public/icons/mongodb.png'
import postgresql from '@public/icons/postgresql.png'

const icons = [
    {
        item:js
    },
    {
        item:react
    },
    {
      item: redux
    },
    {
        item: next
    },
    {
    item: sass
    },
    {
        item: mongodb,
    },
    {
        item: postgresql
    }
]
const Slider = () => {
    return (
        <div className={styles.rootWrapperSlider}>
            {
                icons.map((icons)=>{
                  return  <Image className={styles.ImageSlider} src={icons.item} />
                })
            }
        </div>
    );
};

export default Slider;