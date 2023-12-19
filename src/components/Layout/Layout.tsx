import React, { ReactNode } from 'react';

import AppBar from '@components/Layout/AppBar';
import Footer from '@components/Layout/Footer';

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
