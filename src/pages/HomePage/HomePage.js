import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import Section_1 from "../../components/section_1/Section_1"
import Section_2 from "../../components/section_2/Section_2"
import Section_3 from "../../components/section_3/Section_3"
import Section_4 from "../../components/section_4/Section_4"
import TopMenu from "../../components/TopMenu/TopMenu"
import Aos from 'aos';
import'aos/dist/aos.css';
import { useEffect } from 'react';
import './HomePage.css';
function HomePage() {

  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <div style={{'overflow':'hidden'}}>
      <a href="https://api.whatsapp.com/send?phone=+6287774221789&text=Halo%21%20Jati Luhur%20saya%20ingin%20konsultasi%20terkait%20produk/jasa%20anda." class="float" target="_blank">
      <i class="fa-brands fa-whatsapp" style={{'fontSize':32}}></i>
      </a>
        <TopMenu/>
        <Banner/>
        <Section_1/>
        <Section_2/>
        <Section_3/>
        <Section_4/>
        <Footer/>
    </div>
  )
}

export default HomePage