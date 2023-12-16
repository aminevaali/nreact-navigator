import React, {Fragment} from 'react';
import { useState } from 'react';
import styled from 'styled-components'

const headerHeight = '10vh';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.$theme.primary};
  position: fixed;
  height: ${headerHeight};
  top:0;
  width: 100%;
`

const Brand = styled.div`
font-size: 12px;
color: ${(props) => props.$theme.primaryText};
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
padding: 0 3.5%;

img {
  max-width: 32px;
  max-height: 32px;
  margin: 0 5px;
}

z-index: 2;
position: fixed;
top: 5vh;
left: 50%;
transform: translate(-50%, -50%);
background-color: rgba(0, 0, 0, 0);
border-width: 0;
font-size: medium;
color: ${(props) => props.$theme.primaryText};
`

const Nav = styled.nav`
height: ${headerHeight};
top: 0;
padding: 0 5%;

.nav_links {
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;

  .menu_item {
      transition: all ease 0.3s;
      height: 100%;
      
      a {
          text-decoration: none;
          color: ${(props) => props.$theme.primaryText};
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 0 20px;
      }
  }

  .menu_item:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
}

position: relative;
height: 10vh;
width: 100%;

.hamburger{
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-5%, -50%);
  cursor: pointer;
  z-index: 2;
}

.line {
  width: 30px;
  height: 3px;
  margin: 5px;
  background-color: ${(props) => props.$theme.primaryText};
}

.nav_links.pulsing_circle {
  position: fixed;
  width: 100%;
  left: 0;
  height: 90vh;
  top: 10vh;
  flex-direction: column;
  justify-content: space-evenly;
  clip-path: circle(0px at 95% 5%);
  -webkit-clip-path: circle(0px at 95% 5%);
  background-color: ${(props) => props.$theme.primary};
  transition: all 1.35s ease-out;
  pointer-events: none;
}

.nav_links.pulsing_circle .menu_item a {
  font-size: 25px;
}

.nav_links.pulsing_circle .menu_item {
  opacity: 0;
}

.nav_links.pulsing_circle .menu_item:nth-child(1) {
  transition: all 0.5s ease-out 0.25s;
}
.nav_links.pulsing_circle .menu_item:nth-child(2) {
  transition: all 0.5s ease-out 0.5s;
}
.nav_links.pulsing_circle .menu_item:nth-child(3) {
  transition: all 0.5s ease-out 0.75s;
}

.nav_links.pulsing_circle .menu_item:nth-child(4) {
  transition: all 0.5s ease-out 1s;
}

.nav_links.pulsing_circle.open {
  clip-path: circle(calc(100% + 100vh) at 95% 5%);
  -webkit-clip-path: circle(calc(100% + 100vh) at 95% 5%);
  pointer-events: all;
}

.nav_links.pulsing_circle.open .menu_item {
  opacity: 1;
}
`

// header uses position:fixed. so scrollable container that has this element overflows behind header
// BlankSpaceHolder adds a blank space in scrollbar with same height with header.
const BlankSpaceHolder = styled.div`
  width: 100%;
  height: ${headerHeight}
`

export default function Header({theme, brandName, brandIcon }) {
  const [isOpen, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!isOpen);
  }

  return <>
    <StyledHeader $theme={theme}>
      <Brand $theme={theme}>{brandName} {brandIcon && <img src={brandIcon} alt='brand icon' />}</Brand>
      <Nav $theme={theme}>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav_links pulsing_circle ${isOpen ? 'open' : ''}`}>
          <li className="menu_item"><a href="./">About</a></li>
          <li className="menu_item"><a href="./">Contact</a></li>
          <li className="menu_item"><a href="./">Projects</a></li>
          <li className="menu_item"><a href="./">Weblog</a></li>
        </ul>
      </Nav>
    </StyledHeader >

    <BlankSpaceHolder />
  </>;
}
