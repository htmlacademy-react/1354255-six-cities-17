import Logo from '@/components/common/logo/logo';

const FOOTER_LOGO_PROPS = {
  width: 64,
  height: 33,
  className: 'footer'
};

function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo {...FOOTER_LOGO_PROPS} />
    </footer>
  );
}

export default Footer;
