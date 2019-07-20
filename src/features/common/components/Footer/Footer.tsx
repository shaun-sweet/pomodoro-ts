import React from 'react';
import { FooterWrapper, FooterText } from './Footer.styles';

type OwnProps = {};

const Footer: React.FC<OwnProps> = () => (
  <FooterWrapper>
    <FooterText>Created by Shaun Sweet</FooterText>
  </FooterWrapper>
);

export default Footer;
