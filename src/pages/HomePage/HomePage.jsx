import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Section_1 from "../../components/section_1/Section_1";
import Section_2 from "../../components/section_2/Section_2";
import Section_3 from "../../components/section_3/Section_3";
import Section_4 from "../../components/section_4/Section_4";
import TopMenu from "../../components/TopMenu/TopMenu";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './HomePage.css';

function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 700, once: true });
  }, []);

  const waLink = "https://api.whatsapp.com/send?phone=+6287896590246&text=Halo%21%20Jati%20Luhur%2C%20saya%20ingin%20konsultasi%20terkait%20produk%2Fjasa%20anda.";

  return (
    <div style={{ overflow: 'hidden', backgroundColor: '#fafafa' }}>
      {/* WhatsApp floating button */}
      <a href={waLink} className="float" target="_blank" rel="noreferrer" aria-label="Chat WhatsApp">
        <i className="fa-brands fa-whatsapp" style={{ fontSize: 32 }}></i>
      </a>
      <TopMenu />
      <Banner />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Footer />
    </div>
  );
}

export default HomePage;
