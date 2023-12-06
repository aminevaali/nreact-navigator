import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
    padding: 10px;
`;

export default function Main({children}) {
  return <StyledMain>{children}</StyledMain>
}
