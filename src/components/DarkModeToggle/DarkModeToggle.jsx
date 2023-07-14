"use client"

import React, { useContext } from 'react'
import styles from './darkModeToggle.module.css'
import {BiSolidMoon} from 'react-icons/bi'
import {FaSun} from 'react-icons/fa'
import { ThemeContext } from '../../context/ThemeContext'

const DarkModeToggle = () => {
  const {toggle, mode} = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}><BiSolidMoon/></div>
      <div className={styles.icon}><FaSun/></div> 
      <div 
        className={styles.ball}
        style={mode === "light" ? {left: "2px"} : {right: "2px"}}
      />
    </div>
  )
}

export default DarkModeToggle