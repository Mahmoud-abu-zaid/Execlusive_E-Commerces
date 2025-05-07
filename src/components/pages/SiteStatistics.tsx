import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineDollar } from "react-icons/ai";
import { FaSackDollar, FaShop, FaShopify } from "react-icons/fa6";

export default function SiteStatistics() {
  const {t}=useTranslation()
  const Statistics = [
    { icon: <FaShop />, Counter: "10.5k", TypeOfStatistics:t("Sallers active our site")  },
    { icon: <AiOutlineDollar />, Counter: "33k", TypeOfStatistics:t("Mopnthly Produduct Sale")  },
    { icon: <FaShopify />, Counter: "45.5k", TypeOfStatistics:t("Customer active in our site")  },
    { icon: <FaSackDollar />, Counter: "25k", TypeOfStatistics:t("Anual gross sale in our site")  },
  ];

  const [activeStatistics, setActiveStatistics] = useState(Statistics.length / 2);
  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-5 flex-wrap py-9 ">
          {Statistics.map((statistics, index) => (
            <div
              key={index}
              onClick={() => setActiveStatistics(index)}
              className={`flex flex-col items-center justify-center w-[270px] h-[230px] shadow cursor-pointer rounded duration-300 ease-in ${
                activeStatistics === index ? "bg-main-color text-white" : ""
              }`}
            >
              <p
                className={`text-4xl p-4 bg-black rounded-[50px]  border-10 duration-300 ease-in ${activeStatistics === index ? "bg-white text-black border-[#e67c7c]" : "text-white border-gray-300"}`}
              >
                {statistics.icon}
              </p>
              <p className="text-3xl py-3 font-bold">{statistics.Counter}</p>
              <p>{statistics.TypeOfStatistics}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
