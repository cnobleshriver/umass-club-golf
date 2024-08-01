import styles from "./ContactPage.module.css";

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
    title: "Treasurer",
    name: "Markus Pierre",
    email: "mlpierre@umass.edu",
  },
  {
    title: "Secretary",
    name: "Jared Curran",
    email: "jaredcurran@umass.edu",
  },
];

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <div className={styles.interestForm}>
        <p>
          Interested in joining us? Fill out this{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScS7gt2QBsnG1ztn5Lj0oh57UU9ovQicdXoxb1Omg5dvxWrBA/viewform" target="_blank" rel="noopener noreferrer">
            Interest Form
          </a>
        </p>
      </div>
      {contacts.map((contact, index) => (
        <div key={index} className={styles.contactCard}>
          <h2>{contact.title}</h2>
          <p>{contact.name}</p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      ))}
    </div>
  );
}
