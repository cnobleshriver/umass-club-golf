import styles from "./ContactPage.module.css";
import Image from "next/image";

const contacts = [
  {
    title: "President",
    name: "Mike Pietrini",
    email: "mpietrini@umass.edu",
  },
  {
    title: "Vice President",
    name: "Chris Pietrini",
    email: "cpietrini@umass.edu",
  },
  {
    title: "Secretary",
    name: "Markus Pierre",
    email: "mlpierre@umass.edu",
  },
  {
    title: "Treasurer",
    name: "Jared Curran",
    email: "jaredcurran@umass.edu",
  },
];

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>
          Have questions about UMass Club Golf? Reach out to our team
          leadership.
        </p>
      </div>
      <div className={styles.interestForm}>
        <h2>Interested in Joining?</h2>
        <p>Fill out our interest form to get involved with UMass Club Golf.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc3A8HaCwtTTeQbjXEzOXKempDac8xz032IqSVK4F9q01T78A/viewform?usp=pp_url"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Interest Form →
        </a>
      </div>

      <h2 className={styles.teamHeader}>Team Leadership</h2>
      <div className={styles.imageContainer}>
        <Image
          src="/leadership-photo-2.jpg"
          alt="UMass Club Golf Leadership Team"
          width={1000}
          height={600}
          className={styles.leadershipImage}
          priority
        />
      </div>
      <div className={styles.contactsGrid}>
        {contacts.map((contact, index) => (
          <div key={index} className={styles.contactCard}>
            <div className={styles.contactTitle}>{contact.title}</div>
            <div className={styles.contactName}>{contact.name}</div>
            <a href={`mailto:${contact.email}`} className={styles.contactEmail}>
              {contact.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
