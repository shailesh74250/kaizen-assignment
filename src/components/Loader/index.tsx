import React from 'react';
import './loader.scss'; // Optional CSS file for styling

interface LoaderProps {
  size?: 'small' | 'medium' | 'large'; // Optional prop for size
  color?: string; // Optional prop for color customization
}

const Loader: React.FC<LoaderProps> = ({ size = 'medium', color = '#000' }) => {
  const loaderSize = size === 'small' ? 20 : size === 'large' ? 60 : 40;

  const loaderStyle: React.CSSProperties = {
    width: loaderSize,
    height: loaderSize,
    border: `4px solid ${color}`,
    borderTop: `4px solid transparent`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return <div style={loaderStyle}></div>;
};

export default React.memo(Loader);
