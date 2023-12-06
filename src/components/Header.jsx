import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'

const Brand = styled.div`
background-color: #444965;
padding: 4px;
font-size: 12px;
border-bottom: 1px solid black;
color: white;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;

img {
  max-width: 32px;
  max-height: 32px;
  margin: 0 5px;
}

@media screen and (max-width: 768px){
  z-index: 2;
  position: fixed;
  top: 5vh;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0);
  border-width: 0;
  font-size: medium;
  color: #444965;
}
`

const Nav = styled.nav`
background-color: #f8cd4f;
position: sticky;
top: 0;

.nav_links {
margin: 0;
list-style: none;
display: flex;
justify-content: space-evenly;
align-items: center;

.menu_item {
    background-color: $menuItemBackColor;
    transition: all ease 0.3s;

    a {
        text-decoration: none;
        color: $menuItemTextColor;
        font-size: $menuItemFontSize;
        display: inline-block;
        padding: 20px;
    }
}

.menu_item:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

}

@media screen and (max-width: 768px){
position: relative;
height: 10vh;

.hamburger{
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(-5%, -50%);
  cursor: pointer;
  z-index: 2;
}

.line {
  width: 30px;
  height: 3px;
  margin: 5px;
  background-color: #444965;
}

.nav_links.pulsing_circle {
  position: fixed;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-evenly;
  clip-path: circle(0px at 95% 5%);
  -webkit-clip-path: circle(0px at 95% 5%);
  background-color: #f8cd4f;
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

.nav_links.pulsing_circle.open {
  clip-path: circle(calc(100% + 100vh) at 95% 5%);
  -webkit-clip-path: circle(calc(100% + 100vh) at 95% 5%);
  pointer-events: all;
}

.nav_links.pulsing_circle.open .menu_item {
  opacity: 1;
}
}
`

export default function Header({brandIcon}) {
    const [isOpen, setOpen] = useState(false);

    function toggleMenu() {
        // const navLinks = document.querySelector('nav_links');
        // navLinks.classList.toggle('open');
        setOpen(!isOpen);
    }

    return <header className="header">
        <Brand>Brand Name {brandIcon && <img src={brandIcon} alt='brand icon' />}</Brand>
        <Nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={`nav_links pulsing_circle ${isOpen ? 'open' : ''}`}>
                <li className="menu_item"><a href="./">About</a></li>
                <li className="menu_item"><a href="./">Contact</a></li>
                <li className="menu_item"><a href="./">Projects</a></li>
            </ul>
        </Nav>
    </header >;
}
