import { FooterWrapper } from "./styled";

function Footer() {
  return (
    <FooterWrapper>
      <div className="text">
        <h2>Don&rsquo;t miss something</h2>
        <br />
        <h2>important</h2>
      </div>

      <ul className="social-list">
        <li>Instagram</li>
        <li>Facebook</li>
        <li className="logo">COMMIT.</li>
        <li>Twitter</li>
        <li>Linkedin</li>
      </ul>
    </FooterWrapper>
  );
}

export default Footer;
