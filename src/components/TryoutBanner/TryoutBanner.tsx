"use client";
import { useState } from "react";
import styles from "./TryoutBanner.module.css";

interface TryoutBannerProps {
  onOpenModal: () => void;
}

export function TryoutBanner({ onOpenModal }: TryoutBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerText}>
          <span className={styles.bannerTitle}>Tryouts Open!</span>
          <span className={styles.bannerDescription}>
            Join UMass Club Golf - Sign up for tryouts on September 6th & 7th, 2025
          </span>
        </div>
        <div className={styles.bannerActions}>
          <button
            onClick={onOpenModal}
            className={styles.signupButton}
          >
            Sign Up Now
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className={styles.closeButton}
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
