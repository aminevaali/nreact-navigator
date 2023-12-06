import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: green;
  color: red;
  text-align: center;
  padding:10px;
`;

export default function Footer() {
  return <StyledFooter>This is Footer text</StyledFooter>;
}
