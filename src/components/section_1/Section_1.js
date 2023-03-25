import './Section.css';

function Section_1() {

  return (
    <>
        <div className='container mt100 '>
            <div className='row text-center'>
                <div className='col-md-4 px-5 set_card_section_1 mt-5'  data-aos="fade-down">
                    <h4 className='section_1_card_title dm jl_grey_txt' >Pembuatan Furniture</h4>
                    <p className='section_1_card_text inter jl_grey_txt '>Kami dapat menyediakan furnitur yang anda butuhkan sekalipun anda memiliki spesifikasi tersendiri</p>
                    <p className='section_1_card_link inter bold jl_yellow_txt mt-5'>Pelajari lebih lanjut <i class="fa-solid fa-arrow-right" ></i></p>
                </div>
                <div className='col-md-4 px-5 set_card_section_1 mt-5' data-aos="fade-down">
                    <h4 className='section_1_card_title dm jl_grey_txt'>Renovasi & Perawatan</h4>
                    <p className='section_1_card_text inter jl_grey_txt '>Melayani permintaan untuk melakukan renovasi rumah, kantor, dan bangunan lainnya serta dapat melakukan perawatan pada bagian yang dibutuhkan</p>
                    <p className='section_1_card_link inter bold jl_yellow_txt mt-5'>Pelajari lebih lanjut <i class="fa-solid fa-arrow-right" ></i></p>
                </div>
                <div className='col-md-4 px-5 set_card_section_1 mt-5' data-aos="fade-down">
                    <h4 className='section_1_card_title dm jl_grey_txt' >Exterior & Interior</h4>
                    <p className='section_1_card_text inter jl_grey_txt '>Melayani pembuatan Interior seperti Kitchen Set, Room Design, dan lainnya serta pembuatan Pintu, Kusen, Jendela, dan kebutuhan ekterior lainnya yang anda perlukan</p>
                    <p className='section_1_card_link inter bold jl_yellow_txt mt-5'>Pelajari lebih lanjut <i class="fa-solid fa-arrow-right" ></i></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section_1