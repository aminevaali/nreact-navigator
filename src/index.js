import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import styled from 'styled-components';

const StyledNNavigator = styled.div`
  *{
    padding: 0;
    margin: 0;
  }
`

export const NNavigator = (props) => {
  return (
    <StyledNNavigator>
      <Header brandIcon={props.brandIcon} />

      <Main>{props.children}</Main>

      <Footer/>
    </StyledNNavigator>
  )
}