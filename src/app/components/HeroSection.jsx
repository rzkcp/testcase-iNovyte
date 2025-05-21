"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16" id="beranda">
      <div className="grid grid-cols-1 sm:grid-cols-12 py-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-tc mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            Nikmati Kopi Otentik dari Boyolali – Om Koplak
          </h1>
          <p className="text-tc text-base sm:text-lg mb-6 lg:text-xl">
            Rasakan sensasi kopi lokal dengan cita rasa khas yang memanjakan
            lidah.
          </p>
          <div>
            <Link
              href="/#produk"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-secondary text-white hover:bg-white active:bg-white hover:font-bold hover:bg-thirdary"
            >
              Pesan Sekarang
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-thirdary w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-white">
            <Image
              src="/images/hero.png"
              alt="logo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
              style={{ opacity: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
