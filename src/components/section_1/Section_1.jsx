import './Section.css';

function Section_1() {
  return (
    <>
      <div id="layanan" className='md:container mt100 mb100'>
        <p className='text-center inter jl_yellow_txt bold mb-1' style={{letterSpacing:'2px', fontSize:'13px'}}>APA YANG KAMI TAWARKAN</p>
        <h2 className='text-center dm jl_grey_txt mb-12' style={{fontSize:'36px'}}>Layanan Kami</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
          <div className='px-6 mt-6' data-aos="fade-up" data-aos-delay="0">
            <div className='service_card'>
              <div className='service_icon'>
                <i className="fa-solid fa-door-open"></i>
              </div>
              <h4 className='section_1_card_title dm jl_grey_txt mt-6'>Kusen, Pintu & Jendela</h4>
              <p className='section_1_card_text inter jl_grey_txt'>Pembuatan dan pemasangan kusen, pintu, dan jendela dari kayu pilihan maupun aluminium modern sesuai kebutuhan hunian Anda</p>
            </div>
          </div>
          <div className='px-6 mt-6' data-aos="fade-up" data-aos-delay="100">
            <div className='service_card'>
              <div className='service_icon'>
                <i className="fa-solid fa-hammer"></i>
              </div>
              <h4 className='section_1_card_title dm jl_grey_txt mt-6'>Renovasi & Perawatan</h4>
              <p className='section_1_card_text inter jl_grey_txt'>Melayani renovasi dan perawatan pintu, jendela, dan kusen yang sudah ada — mulai dari perbaikan ringan hingga penggantian total</p>
            </div>
          </div>
          <div className='px-6 mt-6' data-aos="fade-up" data-aos-delay="200">
            <div className='service_card'>
              <div className='service_icon'>
                <i className="fa-solid fa-couch"></i>
              </div>
              <h4 className='section_1_card_title dm jl_grey_txt mt-6'>Furniture & Interior</h4>
              <p className='section_1_card_text inter jl_grey_txt'>Pembuatan meja, lemari, dan kebutuhan furniture lainnya. Juga melayani kebutuhan interior seperti kitchen set dan desain ruangan</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section_1;
