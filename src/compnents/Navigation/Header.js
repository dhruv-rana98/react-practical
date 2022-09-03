const Header = (props) => {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid bg-dark text-white-50">
        <span class="navbar-brand mb-0 h1">{props.title}</span>
      </div>
    </nav>
  );
};
export default Header;
