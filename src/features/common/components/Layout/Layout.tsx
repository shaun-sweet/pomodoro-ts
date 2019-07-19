import React from 'react';
import { LayoutWrapper } from './Layout.styles';
import Header from '../Header';
import Footer from '../Footer';

type OwnProps = {};

const Layout: React.FC<OwnProps> = (props) => (
  <LayoutWrapper>
    <Header />
    This is a Layout
    <Footer />
  </LayoutWrapper>
);

export default Layout;
