import React from 'react'
import styles from './NNavigation.module.css'

const Header = ({ brandIcon }) => {

  function toggleMenu() {
    const navLinks = document.querySelector(`.${styles.nav_links}`);
    navLinks.classList.toggle(styles.open);
    console.log(navLinks);
  }

  return <header className={styles.header}>
    <div className={styles.brand}>Brand Name {brandIcon && <img src={brandIcon} alt='brand icon' />}</div>
    <nav className={styles.nav}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul className={`${styles.nav_links} ${styles.pulsing_circle}`}>
        <li className={styles.menu_item}><a href="./">About</a></li>
        <li className={styles.menu_item}><a href="./">Contact</a></li>
        <li className={styles.menu_item}><a href="./">Projects</a></li>
      </ul>
    </nav>
  </header >;
}

const Footer = () => {
  return <footer className={styles.footer}>
    {/* todo */}
    This is a test text for footer
  </footer>
}

const Main = ({ children }) => {
  return <main className={styles.main}>
    {children}
  </main>
}

export const NNavigator = (props) => {

  return (
    <div>
      <Header brandIcon={props.brandIcon} />

      <Main>{props.children}</Main>

      <Footer />
    </div>
  )
}