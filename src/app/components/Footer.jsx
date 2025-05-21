"use client";
import { PhoneIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 pt-11">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className="flex flex-col items-center md:items-start mb-8 md:mb-0"
            id="kontak"
          >
            <img
              src="/images/logow.png"
              alt="Logo"
              className="w-32 h-32 mb-4"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-m text-secondary ">
                Sosial Media & E-commerce
              </h2>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/kedai_omkoplak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <img
                    src="/images/instagram (2).svg"
                    alt="Instagram"
                    className="w-8 h-8 mb-4"
                  />
                </a>
                <a
                  href="https://www.tokopedia.com/omkoplak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300"
                >
                  <img
                    src="/images/tokopedia.svg"
                    alt="Tokopedia"
                    className="w-8 h-8 mb-4"
                  />
                </a>
              </div>
            </div>

            <nav className="space-y-4 md:space-y-0">
              <ul className="space-y-4">
                <li>
                  <a href="#beranda" className="text-tc hover:text-thirdary">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="text-tc hover:text-thirdary">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#produk" className="text-tc hover:text-thirdary">
                    Produk Kami
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="text-tc hover:text-thirdary">
                    Kontak
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8 text-center text-tc text-sm">
          <p>&copy; 2025 Omah Kopi Ngemplak. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
