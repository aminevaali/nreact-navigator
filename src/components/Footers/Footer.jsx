import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.$theme.darkPrimary};
  color: ${(props) => props.$theme.text_icon};
  text-align: center;
  padding:20px;
`;

export default function Footer({theme, children}) {
  return <StyledFooter $theme={theme}>{children}</StyledFooter>;
}
