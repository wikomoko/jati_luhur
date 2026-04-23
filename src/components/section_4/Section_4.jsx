import './Section_4.css';
import porto_4 from '../../images/porto/pintu_kayu_2.jpg';
import porto_5 from '../../images/porto/jendela_aluminium_1.jpg';
import porto_6 from '../../images/porto/jendela_aluminium_2.jpg';
import porto_7 from '../../images/porto/pintu_orange.jpg';
import porto_8 from '../../images/porto/pintu_merah.jpg';

const portoItems = [
  { img: porto_4, title: 'Pintu Kayu', sub: 'Pintu Kusen Kayu, Terpasang Rapi', tag: 'Pintu Kayu' },
  { img: porto_5, title: 'Jendela Aluminium', sub: 'Jendela Aluminium Modern', tag: 'Aluminium' },
  { img: porto_6, title: 'Kusen Aluminium', sub: 'Pintu & Jendela Aluminium Terpasang', tag: 'Aluminium' },
  { img: porto_7, title: 'Pintu Kayu Premium', sub: 'Pintu Kayu Warna Hangat, Custom', tag: 'Pintu Kayu' },
  { img: porto_8, title: 'Pintu Kayu', sub: 'Pintu Kayu Finishing Gelap Elegan', tag: 'Pintu Kayu' },
];

const waLink = "https://api.whatsapp.com/send?phone=+6287896590246&text=Halo%21%20Jati%20Luhur%2C%20saya%20ingin%20konsultasi%20terkait%20produk%2Fjasa%20anda.";

function Section_4() {
  return (
    <>
      <div id="portofolio" className='md:container mt150 px-5 md:px-0'>
        <p className='text-center inter bold jl_yellow_txt mb-2' style={{letterSpacing:'2px', fontSize:'13px'}}>HASIL KERJA KAMI</p>
        <h3 className='text-center jl_grey_txt text_32 dm mb-2'>Portofolio Pekerjaan</h3>
        <p className='text-center inter jl_grey_txt mb-12' style={{fontSize:'15px', opacity:0.7}}>Beberapa contoh proyek yang telah kami selesaikan</p>

        <div className='porto_grid'>
          {portoItems.map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 80}>
              <div className='porto_card'>
                <div className='porto_img_wrap'>
                  <img className='porto_img' src={item.img} alt={item.title} />
                  <div className='porto_tag inter'>{item.tag}</div>
                  <div className='porto_overlay_title'>
                    <h5 className='dm'>{item.title}</h5>
                    <p className='inter'>{item.sub}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12 pt-4'>
          <p className='inter jl_grey_txt mb-4' style={{fontSize:'15px'}}>Tertarik? Konsultasikan kebutuhan Anda dengan kami secara gratis</p>
          <a href={waLink} target="_blank" rel="noreferrer"
            className='inline-block py-4 px-12 rounded-xl'
            style={{backgroundColor:'#25d366', color:'#fff', fontWeight:'bold', fontSize:'16px', textDecoration:'none'}}>
            <i className="fa-brands fa-whatsapp mr-2"></i>Hubungi Kami
          </a>
        </div>
      </div>

      {/* Testimoni */}
      <div id="kontak" className='container mt150 mb-12'>
        <p className='text-center inter bold jl_yellow_txt mb-2' style={{letterSpacing:'2px', fontSize:'13px'}}>KATA PELANGGAN</p>
        <h3 className='text-center jl_grey_txt text_32 dm mb-12'>Testimoni</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            { name: 'Bpk. Hendra', loc: 'Ciputat, Tangerang Selatan', text: 'Hasilnya rapi dan sesuai ekspektasi. Pintu kayu yang dipasang kualitasnya bagus, finishing halus. Pengerjaan juga cepat dan bersih.' },
            { name: 'Ibu Sari', loc: 'Pamulang, Tangerang Selatan', text: 'Saya pesan kusen dan jendela aluminium, hasilnya memuaskan. Harga bersaing, pelayanannya ramah dan responsif.' },
            { name: 'Bpk. Dodi', loc: 'Sawah Baru, Ciputat', text: 'Sudah langganan beberapa kali untuk proyek renovasi. Jati Luhur selalu konsisten dalam kualitas dan ketepatan waktu.' },
          ].map((t, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className='testi_card'>
                <div className='mb-4'>
                  {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star" style={{color:'#C9A664', fontSize:'14px', marginRight:'2px'}}></i>)}
                </div>
                <p className='inter jl_grey_txt' style={{fontSize:'15px', lineHeight:'1.7', fontStyle:'italic'}}>"{t.text}"</p>
                <div className='flex items-center mt-4 pt-2' style={{borderTop:'1px solid #f0f0f0'}}>
                  <div className='testi_avatar'>
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className='ml-4'>
                    <p className='dm jl_grey_txt mb-0' style={{fontSize:'15px'}}>{t.name}</p>
                    <p className='inter mb-0' style={{fontSize:'12px', color:'#aaa'}}>{t.loc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section_4;
