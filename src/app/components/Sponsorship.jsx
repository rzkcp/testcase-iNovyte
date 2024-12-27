"use client";
import React from "react";
import Link from "next/link";

export default function Sponsorship() {
  return (
    <div id="sponsorship">
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center dark:bg-gray-900 py-24">
        <div className="p-6 md:p-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              Ready to Navigate the Future Together? Become a Sponsor Today!
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <Link
              href="https://drive.google.com/file/d/1mb0WTxeguKHmqyAuxk7bU8OxoW8X8TV1/view?usp=drive_link"
              className="mt-3 px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-primary text-white hover:bg-white active:bg-white hover:font-bold hover:bg-secondary"
            >
              Get Started
            </Link>
          </div>
        </div>

        <img
          alt="why sponsor us"
          src="images/KKI 2019.jpg"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </div>
  );
}
