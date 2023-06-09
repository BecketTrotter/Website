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
      muted
      autoplay
      loop
      playsinline
      src="${src}"   
    />`
  }}
  />
  );
};

export default Project;
