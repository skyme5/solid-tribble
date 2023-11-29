import React, { useState } from 'react';

const Image = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(0);

  return (
    <img
      style={{ transition: 'opacity 0.2s ease-in', opacity: loaded }}
      alt={alt}
      src={src}
      onLoad={() => setLoaded(1)}
      {...props}
    />
  );
};

export default Image;
