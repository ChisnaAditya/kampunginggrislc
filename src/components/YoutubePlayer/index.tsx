"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

interface IProps {
  videoId: string;
  autoPlay?: boolean;
}

const YoutubePlayer: React.FC<IProps> = (props) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  const { videoId, autoPlay } = props;
  const videoURL = `https://www.youtube.com/embed/${videoId}${
    autoPlay ? "?autoplay=1" : ""
  }`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const defaultHeight = 450;
  const [videoHeight, setVideoHeight] = useState<number>(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  );

  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    return setVideoHeight(Math.floor(height * ratio));
  }, []);

  useEffect(() => {
    const observer: any = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth);
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    setVideoHeight(Math.floor(height * ratio));
    return function cleanup() {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [videoHeight, handleChangeVideoWidth]);

  return (
    <div ref={videoRef}>
      {load ? (
        <iframe
          ref={iframeRef}
          width="100%"
          height={`${videoHeight}px`}
          src={videoURL}
          frameBorder="0"
          title="YoutubeVideo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        />
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
};

export default YoutubePlayer;
