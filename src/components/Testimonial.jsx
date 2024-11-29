import React from 'react';
import styles from './Testimonial.module.css';

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.logo}>
        <img src="/sisyphus-logo.png" alt="Sisyphus Logo" />
      </div>
      <div className={styles.quote}>
        <h1>
          We've been using Untitled to kick start every new <br />
          project and can't imagine working without it.
        </h1>
      </div>
      <div className={styles.author}>
        <img src="/candice-wu.jpg" alt="Candice Wu" />
        <div className={styles.authorInfo}>
          <h3>Candice Wu</h3>
          <p>Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;