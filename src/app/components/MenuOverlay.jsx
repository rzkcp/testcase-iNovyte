// components/MenuOverlay.jsx

import Link from "next/link";

const MenuOverlay = ({ links }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
      <div className="bg-[#FAF4EF] p-8 rounded-lg space-y-4">
        <ul className="flex flex-col items-center space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="text-xl text-[#33353F] hover:text-gray-500"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuOverlay;
