import { useCallback, useRef } from "react";

type VideoElement = HTMLVideoElement | null;
type VideoRegistryMap = Record<string, VideoElement>;

export const useVideoRegistry = () => {
  const videoRefs = useRef<VideoRegistryMap>({});

  const register = useCallback(
    (key: string) =>
      (element: VideoElement) => {
        videoRefs.current[key] = element;
      },
    [],
  );

  const stopAll = useCallback(() => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }
    });
  }, []);

  const get = useCallback(
    (key: string): HTMLVideoElement | null => {
      return videoRefs.current[key] ?? null;
    },
    [],
  );

  return {
    register,
    stopAll,
    get,
  };
};

