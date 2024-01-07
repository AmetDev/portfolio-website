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
import  ubuntu from '@public/icons/ubuntu.png'
import github from '@public/icons/github.png'
import git from '@public/icons/git.png'
import nginx from '@public/icons/nginx.png'
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
    },
    {
        item: ubuntu
    },
    {
        item: github
    },
    {
        item: git,
    },
    {
        item: nginx
    }
]
const Slider = () => {
    return (
        <div className={styles.rootWrapperSlider}>
            {
                icons.map((icons)=>{
                  return   <Image key={icons.item} className={styles.ImageSlider} src={icons.item} />
                })
            }
        </div>
    );
};

export default Slider;