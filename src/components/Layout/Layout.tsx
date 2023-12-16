import React, { ReactNode } from 'react';
import AppBar from './AppBar';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
