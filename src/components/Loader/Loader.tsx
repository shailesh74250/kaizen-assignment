import React from 'react';
import styles from './Loader.module.scss';
import { LoaderProps } from './LoaderProps';

const Loader: React.FC<LoaderProps> = ({ size = 'medium', color = '#000' }) => {
  const loaderSizeClass = size === 'small' ? styles.small : size === 'large' ? styles.large : styles.medium;

  return (
    <div className={`${styles.loader} ${loaderSizeClass}`} style={{ color: color }}></div>
  );
};

export default React.memo(Loader);
