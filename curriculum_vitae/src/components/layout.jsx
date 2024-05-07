import React from 'react';
import Navbar from './navbar';

function Layout(props) {
  return (
    <span>
      <div className="navbar-container">
         <Navbar {...props.children.props} /></div>
      {props.children}
    </span>
  );
}

export default Layout;


