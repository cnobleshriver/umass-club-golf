import { Hero } from "@/components/Hero/Hero";
import styles from "./HomePage.module.css";

/* Website built by club member, Christian Noble Shriver, in 2023. */

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className={styles.aboutSection}>
        <h2>About UMass Club Golf</h2>
        <div className={styles.aboutText}>
          <p>
            Reestablished in 2021 at the University of Massachusetts Amherst, we
            have grown from a small group of students who love to golf to a
            prominent club known for our sportsmanship, teamwork, and dedication
            to promoting golf within the university. Our team currently
            participates in National Collegiate Club Golf Association (NCCGA)
            New England Region competitions and various NCAA D1, D2 & D3 events
            across the country. These tournaments offer our team members an
            incredible opportunity to travel the country, compete at a high
            level, play terrific golf courses, and represent UMass among top
            collegiate varsity and club golf teams in the country. As there is no
            varsity program on campus, we are proud to be the exclusive representatives
            and premier opportunity for golf at the University of Massachusetts Amherst.
            </p>
            <img
            src="team-photo-1.jpg"
            alt="UMass Club Golf Team"
            className={styles.teamPhoto}
            />
          <h3>Team Structure</h3>
          <p>
            The team is made up of 14 golfers. Four players are elected to leadership 
            positions (President, Vice President, Treasurer & Secretary) and are exempt from tryouts.
          </p>
          
          <h3>Tryouts</h3>
          <p>
            Tryouts for the team are held when students arrive on campus - either the last 
            weekend in August or the first weekend in September. Tryouts consist of two days, 36 holes
            of stroke play. There are 10 spots available each year.
          </p>
          
          <h3>Membership Benefits</h3>
          <p>
            The team charges annual dues between $500 - $1,000. This is the only expense a player 
            is responsible for. Members of the team earn a full membership to the Orchards Golf Club 
            in South Hadley, MA. The Orchards is a demanding Donald Ross design with full access to the
            driving range, short game area, and putting green. It provides an outstanding setting to 
            develop your golf game. Team members are also given a full package of UMass Golf gear. 
            The team frequently travels around the country to events; however, travel expenses are 
            covered by funding provided by the school. As the sole team of golfers at UMass Amherst, 
            we take pride in operating and playing like an NCAA Division 1 program.
          </p>
          
          <h3>Join Us</h3>
          <p>
            While we cannot recruit golfers to the school and our program, we encourage you to 
            express your interest in our Athlete Questionnaire and reach out to us with any questions!
          </p>
          
          <div className={styles.joinButtonContainer}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc3A8HaCwtTTeQbjXEzOXKempDac8xz032IqSVK4F9q01T78A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.joinButton}
            >
              Athlete Questionnaire
            </a>
          </div>
        </div>
      </section>
    </>
  );
}