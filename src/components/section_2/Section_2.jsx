import './Section_2.css';
import wa from '../../images/icons/whatsapp.svg';
import pintuKayu from '../../images/porto/pintu_kayu_1.jpg';
import proyekPerumahan from '../../images/porto/proyek_perumahan_1.jpg';
import jendelaAluminium from '../../images/porto/jendela_aluminium_1.jpg';

const waLink = "https://api.whatsapp.com/send?phone=+6287774221789&text=Halo%21%20Jati%20Luhur%2C%20saya%20ingin%20konsultasi%20terkait%20produk%2Fjasa%20anda.";

function Section_2() {
  return (
    <>
      <div id="tentang" className='md:container mt200 mb150 px-5 md:px-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>

          {/* Kolom kiri — text */}
          <div>
            {/* Desktop */}
            <div className='hidden md:block pr-8' data-aos="fade-right">
              <p className='inter bold jl_yellow_txt mb-2' style={{letterSpacing:'2px', fontSize:'13px'}}>TENTANG KAMI</p>
              <h2 className='dm jl_grey_txt text_50 mb-6' style={{lineHeight:1.2}}>Berpengalaman Belasan Tahun di Bidangnya</h2>
              <p className='inter jl_grey_txt' style={{fontSize:'16px', lineHeight:'1.8'}}>
                Jati Luhur berdiri dan telah melayani kebutuhan kusen, pintu, jendela, serta furnitur kayu selama lebih dari satu dekade. Kami telah mengerjakan berbagai proyek — dari renovasi rumah pribadi hingga proyek perumahan skala besar.
              </p>
              <p className='inter jl_grey_txt mt-4' style={{fontSize:'16px', lineHeight:'1.8'}}>
                Kami juga hadir dengan layanan <strong>kusen dan pintu aluminium</strong> modern, memberikan Anda pilihan material yang lebih beragam sesuai kebutuhan dan anggaran.
              </p>
              <div className='grid grid-cols-3 mt-6 mb-12'>
                <div className='text-center'>
                  <p className='dm jl_yellow_txt' style={{fontSize:'36px', marginBottom:'4px'}}>10+</p>
                  <p className='inter jl_grey_txt' style={{fontSize:'13px'}}>Tahun Pengalaman</p>
                </div>
                <div className='text-center'>
                  <p className='dm jl_yellow_txt' style={{fontSize:'36px', marginBottom:'4px'}}>100+</p>
                  <p className='inter jl_grey_txt' style={{fontSize:'13px'}}>Proyek Selesai</p>
                </div>
                <div className='text-center'>
                  <p className='dm jl_yellow_txt' style={{fontSize:'36px', marginBottom:'4px'}}>3</p>
                  <p className='inter jl_grey_txt' style={{fontSize:'13px'}}>Layanan Utama</p>
                </div>
              </div>
              {/* <a href={waLink} target="_blank" rel="noreferrer" className='flex items-center wa_contact_link'>
                <img height={44} src={wa} alt='whatsapp'/>
                <span className='pl-4 dm jl_grey_txt text_32'>087774221789</span>
              </a> */}
            </div>

            {/* Mobile */}
            <div className='md:hidden text-center' data-aos="fade-up">
              <p className='inter bold jl_yellow_txt mb-1' style={{letterSpacing:'2px', fontSize:'13px'}}>TENTANG KAMI</p>
              <h2 className='dm jl_grey_txt text_32 mb-4'>Berpengalaman Belasan Tahun</h2>
              <p className='inter jl_grey_txt' style={{fontSize:'15px', lineHeight:'1.8'}}>
                Jati Luhur telah melayani kebutuhan kusen, pintu, jendela, serta furnitur kayu selama lebih dari satu dekade. Kami kini juga menyediakan kusen & pintu aluminium modern.
              </p>
              <div className='grid grid-cols-3 mt-6 mb-6'>
                <div className='text-center'>
                  <p className='dm jl_yellow_txt' style={{fontSize:'30px', marginBottom:'4px'}}>10+</p>
                  <p className='inter jl_grey_txt' style={{fontSize:'12px'}}>Tahun Pengalaman</p>
                </div>
                <div className='text-center'>
                  <p className='dm jl_yellow_txt' style={{fontSize:'30px', marginBottom:'4px'}}>100+</p>
                  <p className='inter jl_grey_txt' style={{fontSize:'12px'}}>Proyek Selesai</p>
                </div>
                <div className='text-center'>
                  <p className='dm jl_yellow_txt' style={{fontSize:'30px', marginBottom:'4px'}}>3</p>
                  <p className='inter jl_grey_txt' style={{fontSize:'12px'}}>Layanan Utama</p>
                </div>
              </div>
              {/* <a href={waLink} target="_blank" rel="noreferrer" className='flex items-center justify-center wa_contact_link'>
                <img height={40} src={wa} alt='whatsapp'/>
                <span className='pl-4 dm jl_grey_txt text_32'>087774221789</span>
              </a> */}
            </div>
          </div>

          {/* Kolom kanan — foto grid */}
          <div data-aos="fade-left">
            <div className='about_img_grid'>
              <img className='about_img about_img_tall' src={pintuKayu} alt='pintu kayu'/>
              <div className='about_img_col2'>
                <img className='about_img about_img_small' src={proyekPerumahan} alt='proyek perumahan'/>
                <img className='about_img about_img_small' src={jendelaAluminium} alt='jendela aluminium'/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Section_2;
