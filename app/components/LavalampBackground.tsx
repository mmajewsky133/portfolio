"use client";
import React from 'react';
import styles from './LavalampBackground.module.css';

const LavalampBackground = () => {
  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#2a0645]">
        <div className={styles.backdrop}>
          <div className={`${styles.shape} ${styles.one}`}></div>
          <div className={`${styles.shape} ${styles.two}`}></div>
          <div className={`${styles.shape} ${styles.three}`}></div>
          <div className={`${styles.shape} ${styles.four}`}></div>
          <div className={`${styles.shape} ${styles.five}`}></div>
          <div className={`${styles.shape} ${styles.six}`}></div>
          <div className={`${styles.shape} ${styles.seven}`}></div>
        </div>
      </div>
    </>
  );
};

export default LavalampBackground;
