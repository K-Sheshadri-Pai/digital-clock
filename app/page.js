'use client'
import React, {useState} from 'react';
import styles from './page.module.css'

const clock = () => {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  
  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  }

  setInterval(updateTime, 1000);

  return ( 
    <div className={styles.main}>
      <h2>DIGITAL CLOCK</h2>
      <p className={styles.para}>{currentTime}</p>
    </div>
  );
}
 
export default clock;