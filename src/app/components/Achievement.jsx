import React from "react";

export default function Achievement() {
  return (
    <div className="mb-96 py-12">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Achievement
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 relative">
        <div className="h-32 rounded-lg bg-gray-200">
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
              <time
                datetime="2022-10-10"
                className="block text-xs text-gray-500 dark:text-gray-400"
              >
                10th Oct 2022
              </time>

              <a href="#">
                <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                  How to position your furniture for positivity
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>
            </div>
          </article>
        </div>
        <div className="h-32 rounded-lg bg-gray-200"></div>
      </div>
    </div>
  );
}
