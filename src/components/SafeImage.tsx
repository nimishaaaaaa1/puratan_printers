"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  quality?: number;
  priority?: boolean;
  className?: string;
}

export default function SafeImage({
  src,
  alt,
  width,
  height,
  fill = false,
  quality = 75,
  priority = false,
  className = '',
}: SafeImageProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return fill ? (
      <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }} />
    ) : (
      <div 
        className={className} 
        style={{ 
          width: width ? `${width}px` : '100%', 
          height: height ? `${height}px` : 'auto' 
        }} 
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      quality={quality}
      priority={priority}
      className={className}
    />
  );
} 