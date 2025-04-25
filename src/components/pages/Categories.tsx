import { useState } from "react";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones, CiMobile3 } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { PiGameControllerLight } from "react-icons/pi";

const categories = [
  { icon: <CiMobile3 className="text-4xl" />, label: "Phones" },
  { icon: <MdOutlineComputer className="text-4xl" />, label: "Computers" },
  { icon: <BsSmartwatch className="text-4xl" />, label: "SmartWatch" },
  { icon: <CiCamera className="text-4xl" />, label: "Camera" },
  { icon: <CiHeadphones className="text-4xl" />, label: "HeadPhones" },
  { icon: <PiGameControllerLight className="text-4xl" />, label: "Gaming" },
];
export default function Categories() {
  const [activeCategorie, setActiveCategorie] = useState(categories.length / 2);
  const hendleNext = () => {
    setActiveCategorie((next) => (next + 1) % categories.length);
  };
  const hendleback = () => {
    setActiveCategorie((back) => (back - 1 + categories.length) % categories.length);
  };
  return (
    <>
      <section className="px-[40px] pb-5">
        <div className="flex justify-between py-8">
          <div>
            <h2 className="text-[36px] font-bold">Browse By Category</h2>
          </div>
          <div>
            <button onClick={hendleback} className="bg-gray-300 text-black rounded-[50%] p-3 m-2 cursor-pointer  hover:bg-gray-400 transition">
              <FaArrowLeft />
            </button>
            <button onClick={hendleNext} className="bg-gray-300 text-black rounded-[50%] p-3 m-2 cursor-pointer  hover:bg-gray-400 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center flex-wrap gap-5">
            {categories.map((categorie, index) => (
              <div
                key={index}
                onClick={() => setActiveCategorie(index)}
                className={`flex flex-col justify-center items-center border-2 rounded cursor-pointer  w-[170px] h-[145px] transition-all duration-300
              ${activeCategorie === index ? "bg-main-color text-white border-none" : "bg-white border-neutral-400 text-black"}`}
              >
                {categorie.icon}
                <p className="text-2xl mt-2">{categorie.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
