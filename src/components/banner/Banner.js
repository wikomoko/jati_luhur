import './banner.css';
function Banner() {
  return (
    <>
        <div className='container-fluid banner_bg bg_primary'>
            <div className='container ' >
                <div className='row d-none d-md-block '>
                    <div className='col-md-6 '>
                        <p className='text-white dm text_60'>Wujudkan Konsep Hunian Anda</p>
                        <p className='text-white inter regular '>Membantu anda mewujudkan konsep dan kebutuhan hunian anda</p>
                        <button type="button" class="btn  jl_grey_bg py-3 px-4 rounded-4 mt-4"><span className='text-white inter bold'>Memulai <i class="fa-solid fa-arrow-right" ></i></span></button>
                    </div>
                    <div className='col-md-6'></div>
                </div>  
                {/* diff version */}
                <div className='row d-md-none '>
                    <div className='col-12 text-center'>
                        <p className='text-white dm text_32'>Wujudkan Konsep Hunian Anda</p>
                        <p className='text-white inter regular '>Membantu anda mewujudkan konsep dan kebutuhan hunian anda</p>
                        <button type="button" class="btn  jl_grey_bg py-3 px-4 rounded-4 mt-4"><span className='text-white inter bold'>Memulai <i class="fa-solid fa-arrow-right" ></i></span></button>
                    </div>
                </div>
            </div>    
        </div>
    </>
  )
}

export default Banner