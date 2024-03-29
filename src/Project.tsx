import React, { useState, useEffect, useRef } from 'react';

interface Props {
  projectName: string;
  src: string;
}

const Project: React.FC<Props> = ({ projectName, src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = true;
    }
  }, []);

  return (
    <div className={`videoContainer`} dangerouslySetInnerHTML={{
      __html: `
    <video
      preload="auto"
      muted
      autoplay
      loop
      playsinline
      src="${src}"
      style="width: 100%; height: 100%;"
    />`
  }}
  />
  );
};

export default Project;
