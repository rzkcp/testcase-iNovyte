import React from "react";

export default function Achievement() {
  return (
    <div className=" py-12">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Achievement
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 lg:gap-8">
        <div className="rounded-lg bg-gray-200">
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
            <img
              alt="Furniture positioning for positivity"
              src="/images/KKI24.jpeg"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
              <time className="block text-xs text-gray-500 dark:text-gray-400">
                KKI 2024
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white font-bold">
                  National
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                <span className="text-secondary font-bold">13</span> national
                categories competitions
              </p>
            </div>
          </article>
        </div>
        <div className="rounded-lg bg-gray-200">
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
            <img
              alt="Furniture positioning for positivity"
              src="/images/IRCc.jpg"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
              <time className="block text-xs text-gray-500 dark:text-gray-400">
                IRC 2023
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white font-bold">
                  International
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                <span className="text-secondary font-bold">20</span>{" "}
                International categories competition
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
