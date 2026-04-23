import { useState } from 'react';
import './TopMenu.css';
import logo from '../../images/logo/logo.svg';

function TopMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const waLink = "https://api.whatsapp.com/send?phone=+6287774221789&text=Halo%21%20Jati%20Luhur%2C%20saya%20ingin%20konsultasi%20terkait%20produk%2Fjasa%20anda.";

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 jl_navbar">
      <div className="md:container flex items-center justify-between px-5 md:px-0">
        <a href="#beranda" onClick={() => scrollTo('beranda')}>
          <img src={logo} alt="Jati Luhur" width="auto" height="55" />
        </a>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden p-2 border-0 bg-transparent cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl jl_grey_txt`}></i>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 list-none mb-0 p-0">
          {[['beranda','Beranda'],['portofolio','Portofolio'],['tentang','Tentang']].map(([id, label]) => (
            <li key={id}>
              <a className="jl-nav-link inter jl_grey_txt" href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                {label}
              </a>
            </li>
          ))}
          {/* <li className="ml-2">
            <a className="jl-nav-link nav-wa-btn inter" href={waLink} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp mr-2"></i>087774221789
            </a>
          </li> */}
        </ul>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <div className="md:hidden container pb-4">
          <ul className="flex flex-col gap-1 list-none mb-0 p-0">
            {[['beranda','Beranda'],['portofolio','Portofolio'],['tentang','Tentang']].map(([id, label]) => (
              <li key={id}>
                <a className="jl-nav-link inter jl_grey_txt block" href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                  {label}
                </a>
              </li>
            ))}
            {/* <li>
              <a className="jl-nav-link nav-wa-btn inter inline-block mt-1" href={waLink} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp mr-2"></i>087774221789
              </a>
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default TopMenu;
