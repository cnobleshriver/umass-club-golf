import { Hero } from "@/components/Hero/Hero";
import styles from "./HomePage.module.css";

/* Website built by club member, Christian Noble Shriver, in 2023. */

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className={styles.aboutSection}>
        {/* <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScS7gt2QBsnG1ztn5Lj0oh57UU9ovQicdXoxb1Omg5dvxWrBA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.tryoutsButton}
        >
          2024-2025 Tryouts Sign-up
        </a> */}
        <title>UMass Club Golf | University of Massachusetts Golf Team</title>
        <h2>About UMass Club Golf</h2>
        <div className={styles.aboutText}>
          <p>
            Reestablished in 2021 at the University of Massachusetts, we have
            grown from a small group of golfing students to a prominent club
            known for our sportsmanship, teamwork, and dedication to promoting
            golf within the university. Our team currently participates in the
            National Collegiate Club Golf Association (NCCGA) New England Region
            competitions. These tournaments offer our team members an incredible
            opportunity to showcase their skills, compete at a high level, and
            represent UMass among other top collegiate club golf teams in the
            region.
          </p>
        </div>
      </section>
    </>
  );
}
