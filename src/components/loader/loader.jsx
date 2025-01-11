import React from 'react';
import styles from './loader.module.css';

function Loader() {
  return (
    <>
    <div className="flex items-center justify-center h-[100vh]"><div className={styles.container}>
      <div className={styles.loader}>
    <div className={styles.first}>
      <div className={styles.second}>
        <div className={styles.third}>
        </div>
      </div>
    </div>
  </div></div>
  <div class="loader pl-6">
   <div data-glitch="Loading..." class={styles.glitch}>The MetaCryst Club </div>
</div>
</div></>
  );
}

export default Loader;
