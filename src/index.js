import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

const StyledNNavigator = styled.div`
  
`

export const NNavigator = ({ theme, brandName, brandIcon, children }) => {
  return (
    <StyledNNavigator>
      <GlobalStyle />
      {/* Theme props should be passed from nreact-colors library */}
      <Header theme={theme} brandName={brandName} brandIcon={brandIcon} />

      <Main theme={theme}>{children}</Main>

      <Footer theme={theme}>
        This is Footer text
      </Footer>
    </StyledNNavigator>
  )
}