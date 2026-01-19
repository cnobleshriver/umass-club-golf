"use client";
import { useState } from "react";
import Image from "next/image";
import { Hero } from "@/components/Hero/Hero";
import styles from "./HomePage.module.css";
import { DonationModal } from "@/components/DonationModal/DonationModal";
import { TryoutModal } from "@/components/TryoutModal/TryoutModal";
// import { TryoutBanner } from "@/components/TryoutBanner/TryoutBanner";

/* Website built by club member, Christian Noble Shriver, in 2023. */

export default function HomePage() {
  const donationUrl = "https://minutefund.uma-foundation.org/project/44959";
  // const tryoutUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfqcRwdaZm_1pls56NkZAgkBqNAXYVcWvgoKElBXOOF_n-KpQ/viewform?fbclid=PAQ0xDSwMC-iRleHRuA2FlbQIxMQABp8rp5sS8hJ-HWpIFUKw2SDRZULvaVEd8bQK0O0YJUOaIQV1IrsBXBxe6nEiS_aem__AB5pmQFBvEVCzupBwpswg";
  
  const [modalOpened, setModalOpened] = useState(false);
  // const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {/* {showBanner && (
        <TryoutBanner 
          onOpenModal={() => setModalOpened(true)} 
        />
      )} */}
      <Hero />
      <DonationModal donationUrl={donationUrl} />
      {/* <TryoutModal 
        tryoutUrl={tryoutUrl} 
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      /> */}
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
            across the country. These competitions allow our members to travel,
            compete at high levels, experience excellent golf courses, and
            represent UMass alongside top collegiate teams. As the university&apos;s
            sole golf program, we proudly serve as the premier competitive golf
            opportunity at UMass Amherst.
          </p>
          <Image
            src="/team-photo-1.jpg"
            alt="UMass Club Golf Team"
            className={styles.teamPhoto}
            width={800}
            height={600}
          />
          <h3>Team Structure</h3>
          <p>
            Our roster consists of 14 golfers, including four elected leadership
            positions (President, Vice President, Treasurer, and Secretary).
            These four leadership members are automatically retained on the team
            and exempt from the annual tryout process.
          </p>

          <h3>Tryouts</h3>
          <p>
            Tryouts are held annually when students return to campus (typically
            the last weekend of August or first weekend of September). The
            process consists of a 36-hole stroke play competition spread across
            two days. Each year, 10 spots on the team are available through
            tryouts.
          </p>

          <h3>Membership Benefits</h3>
            <p>
            Team members pay annual dues ranging from $500 to $1,000, which
            covers all player expenses. This includes a full membership to the
            Orchards Golf Club in South Hadley, MA—a challenging Donald
            Ross-designed course featuring a complete practice facility with
            driving range, short game area, and putting green. Members also
            receive a comprehensive package of UMass Golf apparel and equipment.
            Additionally, the team participates in competitions throughout the
            country with travel expenses fully covered by the university.
            </p>

          <h3>Join Us</h3>
          <p>
            While we cannot recruit golfers to the school and our program, we
            encourage you to express your interest in our Athlete Questionnaire
            and reach out to us with any questions!
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
            <a
              href="https://forms.gle/XLodL22ScTgm1RfSA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.joinButton}
            >
              Join our newsletter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
