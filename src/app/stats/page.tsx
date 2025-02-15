'use client';
import { useEffect, useState } from 'react';

export default function StatsPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="pdf-container" style={{ width: '100%', height: '100vh' }}>
      {isMobile ? (
        <div className="mobile-pdf-message">
          <p>PDF viewer may not work on mobile devices.</p>
          <a 
            href="stats.pdf"
            download
            className="download-button"
          >
            Download PDF
          </a>
        </div>
      ) : (
        <embed 
          src="stats.pdf" 
          type="application/pdf" 
          width="100%" 
          height="100%" 
        />
      )}
    </div>
  );
}