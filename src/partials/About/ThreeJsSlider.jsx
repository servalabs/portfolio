import React from 'react';
import styles from './slider.module.css';

const images = [
  { url: 'https://server-assets.b-cdn.net/p/courage-to-be-disliked.jpg', alt: 'Courage to be disliked' },
  { url: 'https://server-assets.b-cdn.net/p/jordan-peterson.jpg', alt: 'Jordan Peterson' },
  { url: 'https://server-assets.b-cdn.net/p/huberman-lab.jpg', alt: 'Huberman Lab' },
  { url: 'https://server-assets.b-cdn.net/p/david-googins.webp', alt: 'David Googins' },
  { url: 'https://server-assets.b-cdn.net/p/joe-rogan.jpg', alt: 'Joe Rogan' },
  { url: 'https://server-assets.b-cdn.net/p/marcus-aurelius.jpg', alt: 'Marcus Aurelius' },
  { url: 'https://server-assets.b-cdn.net/p/lex-fridman.jpg', alt: 'Lex Fridman' },
  { url: 'https://server-assets.b-cdn.net/p/sapiens.jpg', alt: 'Sapiens' },
  { url: 'https://server-assets.b-cdn.net/p/the-almanack-of-naval-ravikant-eric-jorgenson-buy-online-bookbins-1.png', alt: 'Naval Ravikant' },
];

const ThreeJsSlider = () => (
  <div className={styles.sliderContainer}>
    <div className={styles.imageGrid}>
      {images.map((image, idx) => (
        <div className={styles.imageItem} key={idx}>
          <img src={image.url} alt={image.alt} loading="lazy" />
        </div>
      ))}
    </div>
  </div>
);

export default ThreeJsSlider;
