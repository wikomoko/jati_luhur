import logo from "../../images/logo/logo.svg";
import maps from "../../images/icons/maps.svg";

function Footer() {
  return (
    <>
      <div className="container mt150">
        <div className="row">
          <div className="col-md-6 p-md-5">
            <img className="img-fluid p-md-5" src={logo} alt="logo" />
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4 text-center text-md-start mt-5">
                <p className="inter bold jl_yellow_txt">Halaman</p>
                <p className="inter jl_grey_txt">Beranda</p>
                <p className="inter jl_grey_txt">Portofolio</p>
                <p className="inter jl_grey_txt">Kontak</p>
                <p className="inter jl_grey_txt">Tentang</p>
              </div>
              <div className="col-md-4 text-center text-md-start mt-5">
                <p className="inter bold jl_yellow_txt">Layanan</p>
                <p className="inter jl_grey_txt">Interior Design</p>
                <p className="inter jl_grey_txt">Exterior Design</p>
                <p className="inter jl_grey_txt">Furnitures</p>
                <p className="inter jl_grey_txt">Renovation</p>
              </div>
              <div className="col-md-4 text-center text-md-start mt-5">
                <p className="inter bold jl_yellow_txt">Kontak</p>
                <p className="inter jl_grey_txt">087774221789</p>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center my-5 py-5">
              <img src={maps} />
              <p className="ps-4 inter jl_grey_txt">
                Jl. Tegal Rotan Raya Rt 01/ Rw 08 (Depan Balai Ratu Permai),
                Sawah Baru, Ciputat, Tangerang Selatan, Banten (15413)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="jl_grey_bg" style={{'height':'60px'}}>
        
      </div>
    </>
  );
}

export default Footer;
