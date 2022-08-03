import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <div>
        <Link to="/character/1">character</Link>
      </div>
      <div>
        <Link to="/episode/2">episode</Link>
      </div>
      <div>
        <Link to="/location/3">location</Link>
      </div>
    </>
  );
}

export default Main;
