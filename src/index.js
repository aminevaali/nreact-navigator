import React, { useEffect, useState } from 'react';
import Footer from './components/Footers/Footer';
import Main from './components/Mains/Main';
import PulsingCircleHeader from './components/Headers/PulsingCircleHeader'
import NormalDesktopHeader from './components/Headers/NormalDesktopHeader';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

const StyledNNavigator = styled.div`
  
`

const getResponsiveHeader = (width) => {
  if (width < 768) {
    return PulsingCircleHeader;
  } else {
    return NormalDesktopHeader;
  }
}

const getResponsiveMain = (width) => {
  // todo return different Components for different widths
  if (width < 768) {
    return Main;
  } else {
    return Main;
  }
}

const getResponsiveFooter = (width) => {
  // todo return different components for different widths
  if (width < 768) {
    return Footer;
  } else {
    return Footer;
  }
}

export const NNavigator = ({
  theme,
  brandName,
  brandIcon,
  children,

  footerMessage
}) => {
  const [width, setWidth] = useState(window.width)
  useEffect(() => {
    // Add window size change event listener on component mount
    window.addEventListener('resize', handleResize)

    // Remove event listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])


  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const ResponsiveHeader = getResponsiveHeader(width);
  const ResponsiveMain = getResponsiveMain(width);
  const ResponsiveFooter = getResponsiveFooter(width);

  return (
    <StyledNNavigator>
      <GlobalStyle />
      {/* Theme props should be passed from nreact-colors library */}
      <ResponsiveHeader theme={theme} brandName={brandName} brandIcon={brandIcon} />

      <ResponsiveMain theme={theme}>{children}</ResponsiveMain>

      <ResponsiveFooter theme={theme}>
        {footerMessage}
      </ResponsiveFooter>
    </StyledNNavigator>
  )
}