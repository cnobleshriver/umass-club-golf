import { Hero } from "@/components/Hero/Hero";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className={styles.aboutSection}>
        <h2>About Us</h2>
        <div className={styles.aboutText}>
          <p>
            Chartered in 1987 at the University of Massachusetts, we&apos;ve grown
            from a small group of golfing students to a prominent club known for
            our sportsmanship, teamwork, and dedication to promoting golf within
            the university. Our team currently participates in the National
            Collegiate Club Golf Association (NCCGA) New England Region
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
