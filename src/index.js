import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

const StyledNNavigator = styled.div`
  
`

export const NNavigator = ({brandName, brandIcon, children}) => {
  return (
    <StyledNNavigator>
      <GlobalStyle />
      <Header brandName={brandName} brandIcon={brandIcon} />

      <Main>{children}</Main>

      <Footer/>
    </StyledNNavigator>
  )
}