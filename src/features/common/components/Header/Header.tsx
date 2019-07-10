import React from 'react';
import { HeaderWrapper, HeaderText } from './Header.styles';

type OwnProps = {};

const Header: React.FC<OwnProps> = () => (
  <HeaderWrapper>
    <HeaderText>Pomodoro Timer</HeaderText>
  </HeaderWrapper>
);

export default Header;
