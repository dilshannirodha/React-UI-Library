import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({
  appName = 'MyApp',
  links = ['Home', 'About', 'Services', 'Contact'],
  onLinkClick = () => {},
  iconImage = null,
  onClickIcon = () => {},
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(links[0]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const handleResize = () => setIsDesktop(window.innerWidth >= 768);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onLinkClick(link);
    setMobileMenuOpen(false);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.appName}>{appName}</div>

      {isDesktop && (
        <div style={{ ...styles.desktopLinks, display: 'flex' }}>
          {links.map((link) => (
            <div
              key={link}
              style={{
                ...styles.link,
                borderBottom: activeLink === link ? '2px solid #3b82f6' : '2px solid transparent',
              }}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </div>
          ))}
        </div>
      )}

      {isDesktop && iconImage && (
        <div style={styles.profileIcon} onClick={onClickIcon}>
          {iconImage}
        </div>
      )}

      {!isDesktop && (
        <div style={styles.mobileMenuIcon} onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}

      {!isDesktop && isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          {links.map((link) => (
            <div
              key={link}
              style={{
                ...styles.mobileLink,
                borderBottom: activeLink === link ? '2px solid #3b82f6' : '2px solid transparent',
              }}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </div>
          ))}
          {iconImage && (
            <div onClick={onClickIcon} style={{ marginTop: 20, cursor: 'pointer' }}>
              {iconImage}
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

// Styles
const styles = {
  nav: {
    backgroundColor: '#111827',
    color: 'white',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    boxShadow: '0 1px 4px rgba(0,0,0,0.6)',
    fontFamily: 'Arial, sans-serif',
  },
  appName: {
    fontSize: '1.25rem',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  desktopLinks: {
    gap: '24px',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    cursor: 'pointer',
    paddingBottom: '6px',
    fontSize: '16px',
    transition: 'color 0.3s ease',
  },
  profileIcon: {
    display: 'block',
    cursor: 'pointer',
  },
  mobileMenuIcon: {
    fontSize: '24px',
    cursor: 'pointer',
    display: 'block',
  },
  mobileMenu: {
    position: 'absolute',
    top: '64px',
    left: 0,
    width: '100%',
    backgroundColor: '#1f2937',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 0',
    zIndex: 50,
  },
  mobileLink: {
    cursor: 'pointer',
    fontSize: '18px',
    paddingBottom: '8px',
    width: '100%',
    textAlign: 'center',
    borderBottom: '2px solid transparent',
    transition: 'color 0.3s ease',
  },
};

export default Navbar;
