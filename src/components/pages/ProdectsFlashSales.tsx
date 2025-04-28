import { useTranslation } from "react-i18next";
import StarRating from "../ui/StarRating";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Count from "../ui/Count";

export default function ProductsFlashSales() {
  const { t } = useTranslation();

  const FlashSales = [
    {
      id: 1,
      title: t("HAVIT HV-G92 Gamepad"),
      imgProdect: "/images/PlayStation_arm.png",
      priceAfter: "$120",
      priceBefore: "$160",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 88,
    },
    {
      id: 2,
      title: t("AK-900 Wired Keyboard"),
      imgProdect: "/images/keyboard.png",
      priceAfter: "$960",
      priceBefore: "$1160",
      PriceReduction: "- 35%",
      rating: 4,
      Quantity: 75,
    },
    {
      id: 3,
      title: t("IPS LCD Gaming Monitor"),
      imgProdect: "/images/g27cq4-500x500 1.png",
      priceAfter: "$375",
      priceBefore: "$400",
      PriceReduction: "- 30%",
      rating: 3,
      Quantity: 99,
    },
    {
      id: 4,
      title: t("IPS LCD Gaming Monitor"),
      imgProdect: "/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
      priceAfter: "$375",
      priceBefore: "$400",
      PriceReduction: "- 25%",
      rating: 4.5,
      Quantity: 99,
    },
    {
      id: 5,
      title: t("HAVIT HV-G92 Gamepad"),
      imgProdect: "/images/PlayStation_arm.png",
      priceAfter: "$120",
      priceBefore: "$160",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 88,
    },
    {
      id: 6,
      title: t("AK-900 Wired Keyboard"),
      imgProdect: "/images/keyboard.png",
      priceAfter: "$960",
      priceBefore: "$1160",
      PriceReduction: "- 35%",
      rating: 4,
      Quantity: 75,
    },
    {
      id: 7,
      title: t("IPS LCD Gaming Monitor"),
      imgProdect: "/images/g27cq4-500x500 1.png",
      priceAfter: "$375",
      priceBefore: "$400",
      PriceReduction: "- 30%",
      rating: 3,
      Quantity: 99,
    },
  ];

  const [position, setPosition] = useState(0);
  const cardWidth = 305;

  const handleNext = () => {
    const maxTranslate = FlashSales.length * cardWidth - window.innerWidth;
    setPosition((prev) => Math.max(prev - cardWidth, -maxTranslate));
  };

  const handleBack = () => {
    setPosition((prev) => Math.min(prev + cardWidth, 0));
  };

  const dir = localStorage.getItem("pageDirection");

  return (
    <>
      <div className="flex  justify-between items-center gap-3  mb-6 px-4">
        <Count
          tergetDate={{
            days: 3,
            hours: 23,
            minutes: 19,
            seconds: 56,
          }}
          storageKey="flashSale1"
        />
        <div className="flex gap-3">
          <button onClick={handleBack} className="bg-gray-300 text-black rounded-full p-3 cursor-pointer hover:bg-gray-400 transition">
            <FaArrowLeft className={`transition-transform ${dir === "rtl" ? "rotate-180" : ""}`} />
          </button>

          <button onClick={handleNext} className="bg-gray-300 text-black rounded-full p-3 cursor-pointer hover:bg-gray-400 transition">
            <FaArrowRight className={`transition-transform ${dir === "rtl" ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden px-4">
        <div className="flex gap-8 transition-transform duration-500" style={{ transform: `translateX(${position}px)` }}>
          {FlashSales.map((prodect) => (
            <div key={prodect.id} className="w-[270px] flex-shrink-0 h-[350px]">
              <div className="flex justify-center items-center w-full h-[250px] relative bg-[#F5F5F5] rounded">
                <img className="w-[172px] h-[152px] transition-transform duration-300 hover:scale-110" src={prodect.imgProdect} alt={prodect.title} />
                <div>
                  <p className="absolute top-2 left-3 bg-[#DB4444] px-4 py-2 rounded-md text-[12px] text-white">{prodect.PriceReduction}</p>
                </div>
              </div>
              <div className="p-2">
                <h3 className="px-2 mb-1">{prodect.title}</h3>
                <div className="flex items-center px-2 mb-1">
                  <span className="text-[#DB4444]">{prodect.priceAfter}</span>
                  <span className="text-[#808080] ml-2">
                    <del>{prodect.priceBefore}</del>
                  </span>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <StarRating rating={prodect.rating} />
                  <span className="text-[#808080]">{`(${prodect.Quantity})`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
