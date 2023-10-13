import React, { ReactNode } from 'react';

type props = {
  children: ReactNode | void;
};

const Layout = ({ children }: props) => {
  return <>{children}</>;
};

export default Layout;
