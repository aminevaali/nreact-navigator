import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
    padding: 10px;
    background-color: ${(props) => props.$theme.lightPrimary};
`;

export default function Main({theme, children}) {
  return <StyledMain $theme={theme}>{children}</StyledMain>
}
