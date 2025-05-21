"use client";
import React, { useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const products = [
  {
    id: 1,
    name: "Kopi Arabica Merapi",
    price: "Rp 44.500",
    image: "/images/arabika_merapi.png",
    description:
      "Dari biji kopi asli yang dipanen di lereng Gunung Merapi, Boyolali, Jawa Tengah. Kopi siap seduh dengan kemasan flat bottom ziplock yang dapat dibuka tutup dan dapat dibawa kemanapun untuk menemani kegiatan harian anda",
  },
  {
    id: 2,
    name: "Kopi Arabica Merbabu",
    price: "Rp 44.500",
    image: "/images/arabika_merbabu.png",
    description:
      "Dari biji kopi asli yang dipanen di lereng Gunung Merbabu, Boyolali, Jawa Tengah. Kopi siap seduh dengan kemasan flat bottom ziplock yang dapat dibuka tutup dan dapat dibawa kemanapun untuk menemani kegiatan harian anda",
  },
  {
    id: 3,
    name: "Kopi Herbal Stamina",
    price: "Rp 39.500",
    image: "/images/herbal_stamina.png",
    description:
      "Dari biji kopi asli yang dipanen di lereng Gunung Merbabu, Boyolali, Jawa Tengah yang dicampur dengan beberapa rempah asli Indonesia untuk menghasilkan tambahan energi yang berdampak pada stamina tubuh sehingga dapat membantu kegiatan keseharian anda.",
  },
  {
    id: 4,
    name: "Kopi Nangka Liberika",
    price: "Rp 34.500",
    image: "/images/nangka_liberika.png",
    description:
      "Dari biji kopi asli yang dipanen di lereng Gunung Merbabu, Boyolali, Jawa Tengah. Kopi siap seduh dengan aroma khas kopi nangka menggunakan kemasan flat bottom ziplock yang dapat dibuka tutup dan dapat dibawa kemanapun untuk menemani kegiatan harian anda",
  },
  {
    id: 5,
    name: "Kopi Robusta Jawa",
    price: "Rp 29.500",
    image: "/images/robusta_jawa.png",
    description:
      "Dari biji kopi asli yang dipanen di lereng Gunung Merbabu, Boyolali, Jawa Tengah. Kopi siap seduh dengan kemasan flat bottom ziplock yang dapat dibuka tutup dan dapat dibawa kemanapun untuk menemani kegiatan harian anda",
  },
  {
    id: 6,
    name: "Kopi Robusta TS",
    price: "Rp 29.500",
    image: "/images/robusta_ts.png",
    description:
      "Dari biji kopi asli yang dipanen di lereng Gunung Merbabu, Boyolali, Jawa Tengah. Kopi siap seduh dengan kemasan flat bottom ziplock yang dapat dibuka tutup dan dapat dibawa kemanapun untuk menemani kegiatan harian anda",
  },
];

const ProductCardSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const scrollToProduct = (direction) => {
    const container = sliderRef.current;
    const cardWidth = container.firstChild.offsetWidth + 16;
    const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;

    if (newIndex >= 0 && newIndex < products.length) {
      setCurrentIndex(newIndex);
      container.scrollTo({
        left: cardWidth * newIndex,
        behavior: "smooth",
      });
    }
  };

  const handleClickOutside = (e) => {
    if (e.target.id === "modal") {
      closeModal();
    }
  };

  return (
    <div className="relative w-full">
      <h2
        className="text-4xl font-bold text-tc mb-11 text-center pb-11"
        id="produk"
      >
        Produk Kami
      </h2>
      <div
        className="overflow-x-auto flex space-x-4 py-4 px-2 scroll-smooth snap-x snap-mandatory"
        ref={sliderRef}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex-none w-64 bg-thirdary border rounded-lg shadow-lg snap-start cursor-pointer"
            onClick={() => openModal(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-75% h-75% object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-secondary">
                {product.name}
              </h3>
              <p className="text-sm text-tc">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        onClick={() => scrollToProduct("left")}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </div>
      <div
        onClick={() => scrollToProduct("right")}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </div>

      {isModalOpen && (
        <div
          id="modal"
          className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center"
          onClick={handleClickOutside}
        >
          <div className="bg-secondary p-8 rounded-lg w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="flex justify-end">
              <button onClick={closeModal} className="text-white text-2xl">
                &times;
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-64 h-64 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-semibold mt-4">
                {selectedProduct.name}
              </h2>
              <p className="text-xl text-gray-700 mt-2">
                {selectedProduct.price}
              </p>
              <p className="text-lg text-gray-600 mt-4">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCardSlider;
