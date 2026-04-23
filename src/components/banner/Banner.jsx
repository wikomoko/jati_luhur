import './banner.css';

const waLink = "https://api.whatsapp.com/send?phone=+6287896590246&text=Halo%21%20Jati%20Luhur%2C%20saya%20ingin%20konsultasi%20terkait%20produk%2Fjasa%20anda.";

function Banner() {
  const scrollToPorto = () => {
    const el = document.getElementById('portofolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="beranda" className='banner_bg'>
      <div className='banner_overlay'></div>
      <div className='container banner_content'>
        <div className='banner_inner'>
          <p className='text-white dm banner_title banner_heading'>
            Wujudkan Konsep<br className='hidden md:block'/>
            {' '}Hunian Anda
          </p>
          <p className='text-white inter regular banner_subtitle'>
            Spesialis kusen, pintu & jendela kayu dan aluminium.
            <span className='banner_subtitle_extra'><br/>Berpengalaman belasan tahun melayani rumah & proyek perumahan.</span>
          </p>
          <div className='banner_btns'>
            <a href={waLink} target="_blank" rel="noreferrer" className='btn_wa_banner py-3 px-6 rounded-xl no-underline'>
              <span className='text-white inter bold'>
                <i className="fa-brands fa-whatsapp mr-2"></i>Konsultasi Gratis
              </span>
            </a>
            <button onClick={scrollToPorto} className='btn_porto_banner py-3 px-6 rounded-xl'>
              <span className='inter bold'>Lihat Portofolio <i className="fa-solid fa-arrow-right"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
