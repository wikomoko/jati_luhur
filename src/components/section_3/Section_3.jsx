import './Secction_3.css';

function Section_3() {
  const offers = [
    { icon: 'fa-comments', label: 'Konsultasi', sub: 'Gratis', desc: 'Diskusikan kebutuhan Anda tanpa biaya' },
    { icon: 'fa-star', label: 'Jaminan', sub: 'Kualitas', desc: 'Material pilihan, hasil rapi & kuat' },
    { icon: 'fa-shield-halved', label: 'Garansi', sub: 'Produk', desc: 'Garansi pemasangan & kerapian hasil kerja' },
    { icon: 'fa-truck', label: 'Layanan', sub: 'Antar', desc: 'Pengiriman ke lokasi Anda' },
  ];

  return (
    <>
      <div className='jl_grey_bg jl_section_gap'>
        <div className='md:container pb-12 px-5 md:px-0'>
          <p className='text-center inter bold mb-1' style={{color:'#C9A664', letterSpacing:'2px', fontSize:'13px'}}>KEUNGGULAN KAMI</p>
          <h3 className='text-center text-white dm text_32 py-4'>Penawaran yang Kami Berikan</h3>
          <div className='grid grid-cols-2 md:grid-cols-4 mt-4'>
            {offers.map((item, i) => (
              <div key={i} className='text-center px-4 my-6' data-aos="fade-up" data-aos-delay={i * 80}>
                <div className='offer_icon_wrap'>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <p className='poppins jl_yellow_txt mt-4 mb-1' style={{fontSize:'18px'}}>{item.label}</p>
                <p className='poppins text-white' style={{fontSize:'22px', fontWeight:'bold', marginBottom:'8px'}}>{item.sub}</p>
                <p className='inter text-white' style={{fontSize:'13px', opacity:0.75, lineHeight:'1.5'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section_3;
