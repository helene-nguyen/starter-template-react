//& Imports SCSS
import './Footer.scss';

const Footer = ({theme}) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`footer theme--${theme}`}>
      <p className="footer__copyright">Copyright © {currentYear} - yourName. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;

