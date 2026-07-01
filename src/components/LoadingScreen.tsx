'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [showLogo, setShowLogo] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    setIsMobile(window.innerWidth < 768);

    const videoDuration = 2500; // 2.5 seconds

    const timer = setTimeout(() => {
      setShowLogo(false);
      onLoadingComplete();
    }, videoDuration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!showLogo) return null;

  const videoSrc = isMobile 
    ? '/videos/artyk-intro-mobile.mp4' 
    : '/videos/artyk-intro-desktop.mp4';

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        poster="/videos/artyk-intro-poster.jpg"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
