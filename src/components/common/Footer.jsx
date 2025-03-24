import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & About */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-primary">Crystal Home Care</h3>
            <p className="text-gray-400">
              Dedicated to providing top-notch home care services, ensuring comfort, safety, and well-being for your loved ones.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Contact Us", "Careers", "FAQ"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-primary transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {["Personal Care", "Home Support", "Companionship", "Specialized Care", "Respite Care", "24/7 Care"].map(
                (service) => (
                  <li key={service}>
                    <Link to="#" className="text-gray-400 hover:text-primary transition">
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <span className="text-gray-400">123 Care Lane, Wellness City, WC 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary mr-3" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <span className="text-gray-400">info@crystalcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Crystal Care. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-primary transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition">Terms of Service</Link>
            <Link to="#" className="hover:text-primary transition">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
