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

const getResponsiveHeader = (width, desktopHeader, phoneHeader, responsiveHeader) => {
  // when responiveHeader is passed to NNavigator. header types are specified with minWidth and maxWidth
  if(responsiveHeader){
    for(var i=0; i < responsiveHeader.length; i++){
      const resp = responsiveHeader[i];
      if(resp.minWidth < width && width <= resp.maxWidth){
        console.log(`responsive bound: min: ${resp.minWidth}, max: ${resp.maxWidth}`)
        return resp.header;
      }
    };
  }

  // when phoneHeader or desktopHeader are passed to NNavigator
  if (width < 768) {
    if(phoneHeader) return phoneHeader;
  } else {
    if(desktopHeader) return desktopHeader;
  }

  // when no specific header type is passed to NNavigator return NormalDesktopHeader as default header.
  return NormalDesktopHeader;
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
  theme, // theme or color pallete of website. it will be imported from nreact-colors library. The project that is using our library should import nreact-colors library too.
  brandName, // name of brand. it is normally shown in top of page in header component
  brandIcon, // icon of brand. it is notmally shown in top of page in header component

  desktopHeader, // A component for header in desktop size
  phoneHeader, // A component for header in phone size
  responsiveHeader, // it has a structure like this: [{minWidth:600px, maxWidth:750px, header:NormalDesktopHeader}, {minWidth:...},...]
  menuItems, // items that is shown in header
  menuItemClickHandler, // event handler of item click in header
  footerMessage, // message that is shown in footer
  children, // child elements of NNavigator component
}) => {
  const [width, setWidth] = useState(window.width)
  useEffect(() => {
    // managing responsiveness on component mount
    handleResize();

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

  const ResponsiveHeader = getResponsiveHeader(width, desktopHeader, phoneHeader, responsiveHeader);
  const ResponsiveMain = getResponsiveMain(width);
  const ResponsiveFooter = getResponsiveFooter(width);

  return (
    <StyledNNavigator>
      <GlobalStyle />
      {/* Theme props should be passed from nreact-colors library */}
      <ResponsiveHeader theme={theme} brandName={brandName} brandIcon={brandIcon} menuItems={menuItems} />

      <ResponsiveMain theme={theme}>{children}</ResponsiveMain>

      <ResponsiveFooter theme={theme}>
        {footerMessage}
      </ResponsiveFooter>
    </StyledNNavigator>
  )
}

export {NormalDesktopHeader, PulsingCircleHeader, Footer};