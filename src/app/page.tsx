import { Hero } from "@/components/Hero/Hero";
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className={styles.aboutSection}>
        <h2>About Us</h2>
        <div className={styles.aboutText}>
          <p>Rooted in the University of Massachusetts, our team is more than just a group of golf enthusiasts. Chartered in 1987, we've grown from a small group of golfing students to a prominent club known for our sportsmanship, teamwork, and dedication to promoting golf within the university.</p>
        </div>
      </section>
    </>
  );
}
