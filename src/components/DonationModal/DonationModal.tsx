'use client';
import { useState, useEffect } from 'react';
import { Modal, Button } from '@mantine/core';
import Image from 'next/image';
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
        <Image
          src="/umass-gives.jpg"
          alt="UMass Gives - Support the UMass Golf team for next season"
          width={400}
          height={400}
          className={styles.donationImage}
        />
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