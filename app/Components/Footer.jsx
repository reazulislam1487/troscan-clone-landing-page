import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Brand */}
      <div style={styles.brand}>
        <h1 style={styles.brandTitle}>Troscán</h1>
      </div>

      {/* Navigation Columns */}
      <div style={styles.navContainer}>
        <div style={styles.navColumn}>
          <h3 style={styles.navHeading}>Sitemap</h3>
          <ul style={styles.list}>
            <li>
              <a href="#about" style={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" style={styles.link}>
                Projects
              </a>
            </li>
            <li>
              <a href="#news" style={styles.link}>
                News
              </a>
            </li>
            <li>
              <a href="#contact" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.navColumn}>
          <h3 style={styles.navHeading}>Socials</h3>
          <ul style={styles.list}>
            <li>
              <a href="#facebook" style={styles.link}>
                Facebook
              </a>
            </li>
            <li>
              <a href="#instagram" style={styles.link}>
                Instagram
              </a>
            </li>
            <li>
              <a href="#linkedin" style={styles.link}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#twitter" style={styles.link}>
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.navColumn}>
          <h3 style={styles.navHeading}>More</h3>
          <ul style={styles.list}>
            <li>
              <a href="#license" style={styles.link}>
                License
              </a>
            </li>
            <li>
              <a href="#grainient" style={styles.link}>
                Grainient
              </a>
            </li>
            <li>
              <a href="#inspirux" style={styles.link}>
                Inspirux
              </a>
            </li>
            <li>
              <a href="#store" style={styles.link}>
                Store
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div style={styles.footerBottom}>
        <div style={styles.copyright}>© 2025, All rights reserved</div>
        <div style={styles.madeInFramer}>🎨 Made in Framer</div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#a8665a",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: "white",
  },
  brand: {
    textAlign: "center",
    marginBottom: 90,
  },
  brandTitle: {
    fontSize: 48,
    fontWeight: 300,
    color: "white",
  },
  navContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 140,
    marginBottom: 120,
    maxWidth: 800,
    marginLeft: "auto",
    marginRight: "auto",
    flexWrap: "wrap",
  },
  navColumn: {
    textAlign: "center",
  },
  navHeading: {
    fontSize: 18,
    fontWeight: 400,
    color: "#e8d4d0",
    marginBottom: 28,
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    display: "block",
    marginBottom: 16,
    color: "white",
    textDecoration: "none",
    fontSize: 32,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  footerBottom: {
    borderTop: "1px solid rgba(255, 255, 255, 0.15)",
    padding: "32px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  copyright: {
    fontSize: 16,
    fontWeight: 300,
    color: "rgba(255, 255, 255, 0.7)",
  },
  madeInFramer: {
    background: "rgba(0, 0, 0, 0.15)",
    padding: "10px 20px",
    borderRadius: 25,
    fontSize: 14,
    fontWeight: 400,
    color: "white",
  },
};

export default Footer;
