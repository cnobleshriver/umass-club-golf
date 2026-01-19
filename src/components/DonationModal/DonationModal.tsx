'use client';
import { useState, useEffect } from 'react';
import { Modal, Button } from '@mantine/core';
import styles from './DonationModal.module.css';

interface DonationModalProps {
  donationUrl: string;
}

export function DonationModal({ donationUrl }: DonationModalProps) {
  const [opened, setOpened] = useState(false);
  
  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setOpened(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Modal 
      opened={opened} 
      onClose={() => setOpened(false)}
      size="lg"
      centered
      title="Support UMass Club Golf"
    >
      <div className={styles.modalContent}>
        <p className={styles.donationText}>
          UMass Club Golf is building a towards a Division 1 future and this
          season is a critical step in our journey. We are raising money to
          support our spring season and a future of longevity and success! We
          would be extremely appreciative of your support. We hope you&apos;ll
          consider donating, and always, thank you for your support!
        </p>
        <Button
          component="a"
          href={donationUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className={styles.donateButton}
        >
          Donate Now
        </Button>
      </div>
    </Modal>
  );
}
