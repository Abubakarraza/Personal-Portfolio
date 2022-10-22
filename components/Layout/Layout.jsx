import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <div style={{ background: '#0e1630' }}>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
