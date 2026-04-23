import logo from "../../images/logo/logo.svg";

const waLink = "https://api.whatsapp.com/send?phone=+6287774221789&text=Halo%21%20Jati%20Luhur%2C%20saya%20ingin%20konsultasi%20terkait%20produk%2Fjasa%20anda.";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

function Footer() {
  return (
    <>
      <div className="jl_grey_bg jl_section_gap mt150">
        <div className="container pb-12">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-6">

            {/* Logo & deskripsi */}
            <div className="col-span-2 md:col-span-4 mb-6 md:mb-0">
              <div className="inline-block bg-white rounded-xl px-4 py-2 mb-4">
                <img src={logo} alt="Jati Luhur" height="44" />
              </div>
              <p className="inter text-white" style={{fontSize:'14px', opacity:0.75, lineHeight:'1.8', maxWidth:'280px'}}>
                Spesialis kusen, pintu & jendela kayu dan aluminium di Ciputat, Tangerang Selatan. Berpengalaman belasan tahun.
              </p>
              {/* <a href={waLink} target="_blank" rel="noreferrer"
                className="inline-block mt-4 py-2 px-6 rounded-lg"
                style={{backgroundColor:'#25d366', color:'#fff', fontWeight:'bold', fontSize:'14px', textDecoration:'none'}}>
                <i className="fa-brands fa-whatsapp mr-2"></i>087774221789
              </a> */}
            </div>

            {/* Halaman */}
            <div className="md:col-span-2 mb-6 md:mb-0">
              <p className="inter bold jl_yellow_txt mb-4">Halaman</p>
              {[['beranda','Beranda'],['layanan','Layanan'],['tentang','Tentang'],['portofolio','Portofolio']].map(([id, label]) => (
                <p key={id} className="inter mb-2" style={{cursor:'pointer'}}>
                  <button onClick={() => scrollTo(id)}
                    className="text-white no-underline footer_link bg-transparent border-0 p-0 cursor-pointer"
                    style={{fontSize:'14px', opacity:0.8}}>{label}</button>
                </p>
              ))}
            </div>

            {/* Layanan */}
            <div className="md:col-span-2 mb-6 md:mb-0">
              <p className="inter bold jl_yellow_txt mb-4">Layanan</p>
              {['Kusen & Pintu Kayu','Jendela Aluminium','Kusen Aluminium','Furniture','Renovasi'].map(s => (
                <p key={s} className="inter text-white mb-2" style={{fontSize:'14px', opacity:0.8}}>{s}</p>
              ))}
            </div>

            {/* Lokasi */}
            <div className="col-span-2 md:col-span-4">
              <p className="inter bold jl_yellow_txt mb-4">Lokasi Kami</p>
              <p className="inter text-white" style={{fontSize:'14px', opacity:0.8, lineHeight:'1.7'}}>
                <i className="fa-solid fa-location-dot jl_yellow_txt mr-2"></i>
                Jl. Tegal Rotan Raya Rt 01/Rw 08<br/>
                (Depan Balai Ratu Permai)<br/>
                Sawah Baru, Ciputat<br/>
                Tangerang Selatan, Banten 15413
              </p>
              <p className="inter text-white mt-4" style={{fontSize:'14px', opacity:0.8}}>
                <i className="fa-solid fa-clock jl_yellow_txt mr-2"></i>
                Senin – Sabtu: 08.00 – 17.00 WIB
              </p>
            </div>

          </div>
          <hr style={{borderColor:'rgba(255,255,255,0.15)', marginTop:'40px', marginBottom:'20px'}}/>
          <p className="inter text-center text-white mb-0" style={{fontSize:'13px', opacity:0.5}}>
            © {new Date().getFullYear()} Jati Luhur.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
