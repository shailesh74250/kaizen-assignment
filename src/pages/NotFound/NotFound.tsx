import React from 'react';
import styles from './NotFound.module.scss';
import { GO_BACK_HOME, PAGE_NOT_FOUND } from '../../utils/constants';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className={styles['not-found']}>
      <h2>{PAGE_NOT_FOUND}</h2>
      <Link to="/">{GO_BACK_HOME}</Link>
    </div>
  )
}

export default React.memo(NotFound);
  