//& Imports SCSS
import './Footer.scss';

const Footer = ({changeMode}) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={`footer theme--${changeMode()}`}>
      <p className="footer__copyright">Copyright © {currentYear} - yourName. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;

