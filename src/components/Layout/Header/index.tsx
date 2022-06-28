import { HeaderWrapper } from "./styled";

function Header(props: any) {
  return (
    <HeaderWrapper lightMode={props.lightMode}>
      <div className="content">
        <span className="logo">COMMIT.</span>
        <div className="menu-btn">
          <svg viewBox="0 0 100 100" width="40" height="40">
            <rect y="30" width="100" height="5"></rect>
            <rect y="60" width="100" height="5"></rect>
          </svg>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
