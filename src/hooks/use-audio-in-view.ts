import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from './use-intersection-observer';

interface UseAudioInViewConfig {
  audioSrc: string;
  startTime: number; // in seconds
  endTime: number; // in seconds
  threshold?: number;
}

/**
 * Custom hook for playing audio with precise timing when element is in view
 * Disabled on mobile devices (< 768px) to save bandwidth and improve performance
 * @param config - Configuration object with audio source and timing
 * @returns Audio element ref and playback state
 */
export const useAudioInView = ({
  audioSrc,
  startTime,
  endTime,
  threshold = 0.5,
}: UseAudioInViewConfig) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent initial load

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
  });

  // Check if device is mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Check immediately
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't initialize audio on mobile devices
    if (isMobile) {
      return;
    }

    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      const audio = new Audio(audioSrc);
      audio.preload = 'auto';
      audioRef.current = audio;
    }

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= endTime) {
        audio.pause();
        setIsPlaying(false);
        setHasPlayed(true);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [audioSrc, endTime, isMobile]);

  useEffect(() => {
    // Don't play audio on mobile devices
    if (isMobile) {
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (isIntersecting && !hasPlayed) {
      // Set the start time and play
      audio.currentTime = startTime;
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Audio autoplay was prevented:', error);
          // Autoplay was prevented - this is expected in some browsers
        });
      }
    } else if (!isIntersecting && isPlaying) {
      // Stop playing when scrolling away
      audio.pause();
      audio.currentTime = startTime; // Reset to start time
      // Don't reset hasPlayed - audio should only play once per session
    }
  }, [isIntersecting, hasPlayed, startTime, isPlaying, isMobile]);

  return {
    elementRef,
    isPlaying,
    isIntersecting,
    audioRef,
  };
};

