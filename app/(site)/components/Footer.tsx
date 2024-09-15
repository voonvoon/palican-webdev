import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="flex flex-col items-center space-y-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#my-services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="/Contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61556867218687"
                target="_blank"
                className="hover:text-gray-400"
              >
                <FaFacebookSquare size={25} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556867218687"
                target="_blank"
                className="hover:text-gray-400"
              >
                <FaInstagram size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/hv-wong-2731a1329/?trk=opento_sprofile_details"
                target="_blank"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-400 text-sm">
              A-16, Menara simfoni , Jln Simfoni2, Cheras 43300 Malaysia
            </p>
            <p className="text-gray-400 text-sm">Email: hvlifeasy@gmail.com</p>
            <p className="text-gray-400 text-sm">Phone: 018-3795728</p>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Pelican Webdev. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
