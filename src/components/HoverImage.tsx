import { useState } from 'react';

interface Props {
  src: string;
  webp?: string;
  altSrc?: string;
  alt: string;
}

export default function HoverImage({ src, webp, altSrc, alt }: Props) {
  const [hovering, setHovering] = useState(false);
  const imageSrc = hovering && altSrc ? altSrc : src;

  return (
    <picture>
      {webp && (!hovering || !altSrc) && (
        <source srcSet={webp} type="image/webp" />
      )}
      <img
        className="w-full row-start-1 h-72 lg:h-screen max-h-800 object-cover"
        src={imageSrc}
        alt={alt}
        loading="lazy"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
    </picture>
  );
}
