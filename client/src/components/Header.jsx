import logo from "./assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>Project Tracker</div>
          </div>
        </a>
        <div
          className="align-right navbar-brand"
          // style={{ fontFamily: "impact", color: "#333" }}
        >
          Anthony Bosek © 2023
        </div>
      </div>
    </nav>
  );
};

export default Header;
