import { Mail, PhoneCall, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import logo from '../assets/logo-light.svg';
import mapBg from '../assets/map-bg.jpg';


export default function Footer() {
  return (

    <footer className="bg-primary text-white ">
      <section className="w-full bg-cover bg-center min-h-[320px] flex items-center justify-center text-white px-4 text-center"
  style={{ backgroundImage: `url(${mapBg})` }}>
  <div className="bg-black/60 p-6 rounded-lg max-w-xl">
    <h3 className="text-xl font-semibold mb-2">
      <a href="/contact-us" className="hover:text-[#8BC5C5] transition">
        A/Prof Beverley Fosh
      </a>
    </h3>
    <p className="text-sm">
      Level 4, 18 North Terrace<br />
      Adelaide SA 5000
    </p>
  </div>
</section>

      <div className="max-w-7xl mx-auto pt-10 px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10 border-b border-[#ffffff33] pb-10">
        {/* Logo and About */}
        <div>
          <img src={logo} alt="Logo" className="h-20 mb-4" />
          <p className="text-sm leading-relaxed text-[#E0F7F7]">
            Dr. Vanbud is committed to providing the highest quality care in breast cancer and general surgery, with compassion, experience, and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-[#8BC5C5]">About</a></li>
            <li><a href="/breast-cancer" className="hover:text-[#8BC5C5]">Breast Cancer</a></li>
            <li><a href="/diagnosis" className="hover:text-[#8BC5C5]">Diagnosis</a></li>
            <li><a href="/general-surgery" className="hover:text-[#8BC5C5]">General Surgery</a></li>
            <li><a href="/contact-us" className="hover:text-[#8BC5C5]">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/appointment" className="hover:text-[#8BC5C5]">Book Appointment</a></li>
            <li><a href="/referral" className="hover:text-[#8BC5C5]">Doctor Referral</a></li>
            <li><a href="/breast-surgery" className="hover:text-[#8BC5C5]">Breast Surgery</a></li>
            <li><a href="/oncoplastic-breast-surgery" className="hover:text-[#8BC5C5]">Oncoplastic Surgery</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <MapPin size={16} className="mt-1 mr-2" />
              <span>123 Health Street, City Name, State, India</span>
            </li>
            <li className="flex items-center">
              <PhoneCall size={16} className="mr-2" />
              <a href="tel:+917010060670" className="hover:text-[#8BC5C5]">+91 70100 60670</a>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:hello@thebrandroots.com" className="hover:text-[#8BC5C5]">hello@thebrandroots.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 max-w-7xl mx-auto text-sm text-[#D1E7E7]">
        <p>&copy; {new Date().getFullYear()} Dr. Vanbud. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-[#8BC5C5]"><Facebook size={18} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-[#8BC5C5]"><Instagram size={18} /></a>
          <a href="#" aria-label="YouTube" className="hover:text-[#8BC5C5]"><Youtube size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
