import React from 'react';
import { HeaderWrapper } from './Header.styles';

type OwnProps = {

}

const Header: React.FC<OwnProps> = (props) => (
  <HeaderWrapper>
    This is a Header
  </HeaderWrapper>
);

export default Header;
