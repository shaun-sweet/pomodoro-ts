import React from 'react';
import { FooterWrapper, FooterText } from './Footer.styles';

type OwnProps = {};

const Footer: React.FC<OwnProps> = () => (
  <FooterWrapper>
    <FooterText>This is a Footer but only in the footer branch</FooterText>
  </FooterWrapper>
);

export default Footer;
