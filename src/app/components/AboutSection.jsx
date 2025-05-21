"use client";
import React, { useTransition, useState, memo } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-12 py-4">
      <h2 className="text-4xl font-bold text-tc mb-4 text-center" id="tentang">
        Tentang Kami
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="relative"
          alt="About Us"
          src="/images/tentang.jpg"
          width={450}
          height={450}
          priority
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg text-tc ">
            Omah Kopi Ngemplak didirikan sejak tahun 2014 yang didirikan oleh
            bapak Eko Budi Suroso. UMKM Omah Kopi Ngemplak ini mempunyai
            keunggulan kopi nangka (liberika/Excelsa) yang sangat turun temurun
            dari nenek moyang dan salah satu peninggalan bangsa belanda. Kopi
            ini dapat tumbuh setinggi 9 meter biji kopinya tentu lebih besar
            daripada arabica dan robusta. Memiliki rasa dan aroma yang sangat
            khas yaitu nangka dan sayuran. Selain kopi Nangka, ada juga kopi
            Arabika dan Robusta yang bercitarasa asli khas Boyolali.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);
