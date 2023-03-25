import porto_1 from '../../images/porto/porto_1.png';
import porto_2 from '../../images/porto/porto_2.png';
import porto_3 from '../../images/porto/porto_3.png';
import porto_4 from '../../images/porto/porto_4.png';

function Section_4() {
  return (
    <>
        <div className='container p-5 mt100'>
            <h3 className='text-center jl_grey_txt text_32 dm'>Beberapa Contoh Pekerjaan Kami</h3>
            <div className='row'>
                <div className='col-md-6 mt-5' data-aos="fade-right">
                    <img className='img-fluid' src={porto_1}  />
                    <h3 className='dm jl_grey_txt mt-3'>Kitchen Set Mate</h3>
                    <span>Interior Design</span>
                    <p className='section_1_card_link inter text-center bold jl_yellow_txt mt-5'>Pelajari lebih lanjut <i class="fa-solid fa-arrow-right" ></i></p>
                </div>
                <div className='col-md-6 mt-5' data-aos="fade-left">
                    <img className='img-fluid' src={porto_2}  />
                    <h3 className='dm jl_grey_txt mt-3'>Lemari Set</h3>
                    <span>Furniture Design</span>
                    <p className='section_1_card_link inter text-center bold jl_yellow_txt mt-5'>Pelajari lebih lanjut <i class="fa-solid fa-arrow-right" ></i></p>
                </div>
                <div className='col-md-6 mt-5' data-aos="fade-right">
                    <img className='img-fluid' src={porto_3}  />
                    <h3 className='dm jl_grey_txt mt-3'>Pintu & Jendela</h3>
                    <span>Exterior Design</span>
                    <p className='section_1_card_link inter text-center bold jl_yellow_txt mt-5'>Pelajari lebih lanjut <i class="fa-solid fa-arrow-right" ></i></p>
                </div>
                <div className='col-md-6 mt-5' data-aos="fade-left">
                    <img className='img-fluid' src={porto_4}  />
                    <h3 className='dm jl_grey_txt mt-3'>Renovation</h3>
                    <span>Renovation & Maintance Service</span>
                    <p className='section_1_card_link inter text-center bold jl_yellow_txt mt-5'>Pelajari lebih lanjut <i class="fa-solid fa-arrow-right" ></i></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section_4