import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #444965;
  color: white;
  text-align: center;
  padding:20px;
`;

export default function Footer() {
  return <StyledFooter>This is Footer text</StyledFooter>;
}
