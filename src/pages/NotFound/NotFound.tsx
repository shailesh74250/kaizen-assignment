import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Not found page</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  )
}

export default React.memo(NotFound);
  