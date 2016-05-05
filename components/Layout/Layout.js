
import React, { PropTypes } from 'react';
import './grid.scss';
import './Layout.scss';
import Navigation from '../Navigation';
import MiniContact from './Minicontact';
import More from './More';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Navigation />
      {children}
      <div className="col-1 pre-footer">
        <MiniContact />
        <More />
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
