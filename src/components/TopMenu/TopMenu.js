import './TopMenu.css';
import logo from '../../images/logo/logo.svg';

function TopMenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
        <a class="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="auto" height="60"/>
        </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="m-auto"></ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link inter jl_grey_txt" aria-current="page" href={'#'}>
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link inter jl_grey_txt" href={'#'}>
                  Portofolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link inter jl_grey_txt" href={'#'}>
                  Kontak
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link inter jl_grey_txt" href={'#'}>Tentang</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopMenu;
