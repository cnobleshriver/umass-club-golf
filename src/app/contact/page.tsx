import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <div className={styles.contactCard}>
        <h2>Club President</h2>
        <p>Sam Robert</p>
        <p><a href="mailto:samuelrobert@umass.edu">samuelrobert@umass.edu</a></p>
      </div>
      <div className={styles.contactCard}>
        <h2>Treasurer</h2>
        <p>Mike Pietrini</p>
        <p><a href="mailto:mpietrini@umass.edu">mpietrini@umass.edu</a></p>
      </div>
    </div>
  );
}