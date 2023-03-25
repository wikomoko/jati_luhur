import './Section_2.css';
import kitchen from '../../images/porto/about.png';
import wa from '../../images/icons/whatsapp.svg';
function Section_2() {
  return (
    <>
    <div className='container mt150'>
        <div className='row '>
            <div className='col-md-6 d-none d-md-block' data-aos="fade-right"> 
                <div className='py-5'>
                    <h3 className='dm jl_yellow_txt text_50' >Rancang dan Temukan Kebutuhan yang Cocok & Sesuai dengan Anda</h3>
                    <p className='inter jl_grey_txt pe-1 mt-5 pt-3'>Kami dapat merekomendasikan yang terbaik atau anda juga bisa mengajukan ide sekaligus mendapat penawaran terbaik terkait biaya yang harus dikeluarkan  dengan melakukan konsultasi Gratis </p>
                    <div className=' mt-5 pt-5 d-flex align-items-center'>
                             <img className=''  height={50} src={wa} alt='wa'/>
                            <span className='ps-5 dm jl_grey_txt text_40'>087774221789</span>
                    </div>
                </div>
            </div>
            <div className='col-md-6 d-md-none' data-aos="fade-right">
                <div className='py-5 text-center'>
                    <h3 className='dm jl_yellow_txt text_32'>Rancang dan Temukan Kebutuhan yang Cocok & Sesuai dengan Anda</h3>
                    <p className='inter jl_grey_txt pe-1 mt-5 pt-3'>Kami dapat merekomendasikan yang terbaik atau anda juga bisa mengajukan ide sekaligus mendapat penawaran terbaik terkait biaya yang harus dikeluarkan  dengan melakukan konsultasi Gratis </p>
                    <div className=' mt-5 pt-5 d-flex align-items-center justify-content-center'>
                             <img className=''  height={50} src={wa} alt='wa'/>
                            <span className='ps-3 dm jl_grey_txt text_32'>087774221789</span>
                    </div>
                </div>
            </div>
            <div className='col-md-6 p-5' data-aos="fade-left">
                <img className='img-fluid rounded-5 ' src={kitchen} alt='kitchen'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section_2