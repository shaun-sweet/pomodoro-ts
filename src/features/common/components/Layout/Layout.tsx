import React from 'react';
import { LayoutWrapper } from './Layout.styles';
import Header from '../Header';
import Footer from '../Footer';
import Timer from '../../../pomodoro/components/Timer';

type OwnProps = {};

const Layout: React.FC<OwnProps> = props => (
  <LayoutWrapper>
    <Header />
    <Timer />
    <Footer />
  </LayoutWrapper>
);

export default Layout;
