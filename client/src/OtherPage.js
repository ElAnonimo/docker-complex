import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      This is the other page
      <Link to='/'>home page</Link>
    </div>
  );
};