"use client";
import React, { useTransition, useState } from "react";
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
    <section className="text-white mt-12 py-4" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="relative"
          alt="About Us"
          src="/images/boutas.jpg"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
            Established in 2012, Barunastra ITS is a student research team based
            at Sepuluh Nopember Institute of Technology, Surabaya, Indonesia and
            also part of ITS Robotics Center. The team focused on conducting
            research and development of Unmanned Surface Vehicles (USV).
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
