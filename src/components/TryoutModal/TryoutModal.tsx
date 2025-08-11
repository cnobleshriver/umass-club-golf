"use client";
import { useState, useEffect } from "react";
import { Modal, Button } from "@mantine/core";
import Image from "next/image";
import styles from "./TryoutModal.module.css";

interface TryoutModalProps {
  tryoutUrl: string;
  opened?: boolean;
  onClose?: () => void;
}

export function TryoutModal({ tryoutUrl, opened: externalOpened, onClose }: TryoutModalProps) {
  const [internalOpened, setInternalOpened] = useState(false);

  const isOpened = externalOpened !== undefined ? externalOpened : internalOpened;
  const handleClose = onClose || (() => setInternalOpened(false));

  useEffect(() => {
    // Only auto-open if not externally controlled
    if (externalOpened === undefined) {
      const timer = setTimeout(() => {
        setInternalOpened(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [externalOpened]);

  return (
    <Modal
      opened={isOpened}
      onClose={handleClose}
      size="lg"
      centered
      title="Join UMass Club Golf - Tryout Signup"
    >
      <div className={styles.modalContent}>
        <div className={styles.tryoutInfo}>
          <h3>Tryouts Information</h3>
          <p>
            Tryouts for the UMass Golf team for the 2025-2026 school year will
            be held at Wyckoff Country Club in Holyoke, MA on September 6th and
            7th, 2025. The tryout will be a 36-hole stroke play format (18 holes
            each day) for 10 spots.
          </p>
        </div>
        <Button
          component="a"
          href={tryoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className={styles.tryoutButton}
        >
          Sign Up for Tryouts
        </Button>
      </div>
    </Modal>
  );
}
