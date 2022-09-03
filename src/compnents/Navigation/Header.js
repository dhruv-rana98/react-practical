const Header = (props) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid bg-dark text-white-50">
        <span className="navbar-brand mb-0 h1">{props.title}</span>
      </div>
    </nav>
  );
};
export default Header;
