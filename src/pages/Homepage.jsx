import styles from "./Homepage.module.css";

export function Homepage() {
  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to Suit Savvy</h1>
        <p className={styles.heroDescription}>
          Discover the finest collection of suits tailored to your unique style.
        </p>
      </section>

      <section className={styles.customerShowcase}>
        <h2 className={styles.sectionTitle}>Customer Showcase</h2>
        <div className={styles.showcaseGrid}>
          <img
            src="./img/homepage/beckham-suit.webp"
            alt="Customer 1"
            className={styles.showcaseImage}
          />
          <img
            src="./img/homepage/women-suit.webp"
            alt="Customer 2"
            className={styles.showcaseImage}
          />
          <img
            src="./img/homepage/v-suit.webp"
            alt="Customer 3"
            className={styles.showcaseImage}
          />
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <p className={styles.testimonial}>
          &quot;I found the perfect suit for my wedding. Excellent quality and fit!"
        </p>
        <p className={styles.testimonial}>
          &quot;Suit Savvy has the best selection of modern suits. Highly recommend!"
        </p>
      </section>

      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>About Us</h2>
        <p className={styles.aboutDescription}>
          At Suit Savvy, we believe in providing high-quality suits for every
          occasion. Our collection is carefully curated to ensure style and
          comfort.
        </p>
      </section>
    </div>
  );
}
