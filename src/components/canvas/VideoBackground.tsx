import { useState, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster: string;
}

export default function VideoBackground({ src, poster }: VideoBackgroundProps) {
  const [canPlay, setCanPlay] = useState(false);
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    const connection = (navigator as any).connection;
    if (connection && (connection.saveData || ['slow-2g', '2g', '3g'].includes(connection.effectiveType))) {
      setIsSlow(true);
    }
  }, []);

  if (isSlow) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center -z-20 opacity-30 grayscale"
        style={{ backgroundImage: `url(${poster})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        onCanPlay={() => setCanPlay(true)}
        className={`w-full h-full object-cover grayscale transition-opacity duration-1000 ${canPlay ? 'opacity-30' : 'opacity-0'}`}
      >
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    </div>
  );
}
