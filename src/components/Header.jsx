import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="primary-header">
      <div className="container">
        <div className="logo">
          <img className="logo-img" src={logo} alt="logo" />
          <span className="logo-text">my travel journal</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
