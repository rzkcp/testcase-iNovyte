import Image from "next/image";

const features = [
  { name: "Name", description: "Gypsy" },
  {
    name: "Beam",
    description: "58,14 cm",
  },
  { name: "LOA", description: "99,9 cm" },
  { name: "Height", description: "29 cm" },
  { name: "Draft", description: "17,8 cm" },
  {
    name: "Displacement",
    description: "33,56 kg",
    name: "Features",
    description:
      "This boat's system operates autonomously, utilizing lidar to accurately detect the distance of obstacles and a camera system to effectively classify object types, such as images. The boat also equipped with 2 GPS, featuring GPS for seamless communication with land and an additional GPS to significantly enhance the accuracy of its coordinates.",
  },
];

export default function OurBoat() {
  return (
    <div className="bg-black" id="ourboat">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Boat
          </h2>
          <p className="mt-4 text-white">
            The Barunastra Autonomous Surface Vehicle (ASV) is a
            high-performance, cutting-edge boat designed for autonomous maritime
            competitions. Equipped with advanced sensors, GPS, and AI, it
            navigates independently in challenging water environments. Built for
            precision and efficiency, the ASV uses eco-friendly materials and
            technology, highlighting the potential of autonomous systems in the
            maritime industry.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-bold text-white">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-300 text-opacity-50">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[600px] lg:h-[600px] relative border-white">
          <Image
            src="/images/kapalbaru.png"
            alt="boat"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
