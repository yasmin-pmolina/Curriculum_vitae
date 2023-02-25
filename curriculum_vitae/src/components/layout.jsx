import React from 'react';
import Navbar from './navbar';

function Layout(props) {
  return (
    <span>
      <div className="navbar-container">
        <Navbar /> </div>
      {props.children}
    </span>
  );
}

export default Layout;


