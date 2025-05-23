import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Managers() {
  const { t } = useTranslation();
  const managers = [
    { imgManag: "/images/tom_cruise.png", nameManag: t("Tom Cruise"), jop: t("Founder & Chairman"), media: { iconst: <IoLogoInstagram />, iconI: <TiSocialLinkedin />, iconL: <FaXTwitter /> } },
    { imgManag: "/images/will_Smith.png", nameManag: t("Will Smith"), jop: t("Product Designer"), media: { iconst: <IoLogoInstagram />, iconI: <TiSocialLinkedin />, iconL: <FaXTwitter /> } },
    {
      imgManag: "/images/snapedit_1746612194757.png",
      nameManag: t("Mahmoud Abu Zaid"),
      jop: t("Front End Developer"),
      media: { iconst: <IoLogoInstagram />, iconI: <TiSocialLinkedin />, iconL: <FaXTwitter /> },
    },
    { imgManag: "/images/emma_watson.png", nameManag: t("Emma Watson"), jop: t("Managing Director"), media: { iconst: <IoLogoInstagram />, iconI: <TiSocialLinkedin />, iconL: <FaXTwitter /> } },
    { imgManag: "/images/tom_cruise.png", nameManag: t("Tom Cruise"), jop: t("Founder & Chairman"), media: { iconst: <IoLogoInstagram />, iconI: <TiSocialLinkedin />, iconL: <FaXTwitter /> } },
  ];

  const [currentSlide, setCurrentSlide] = useState(2);
  const [cardsToShow, setCardsToShow] = useState(3);
  const dir = localStorage.getItem("pageDirection");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 992) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
      setCurrentSlide(1);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, managers.length - cardsToShow);
    setCurrentSlide(Math.min(index, maxIndex));
  };

  return (
    <div className="relative">
      <div className="flex justify-center overflow-hidden relative">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: dir === "rtl" ? `translateX(${currentSlide * (100 / cardsToShow)}%)` : `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
            width: `${managers.length * (100 / cardsToShow)}%`,
          }}
        >
          {managers.map((manager, index) => (
            <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / cardsToShow}%` }}>
              <div className="flex flex-col justify-center">
                <div className="max-w-full h-[430px] flex justify-center items-end bg-gray-200">
                  <img className="w-[230px] sm:w-[300px] h-[370px] " src={manager.imgManag} alt={manager.nameManag} />
                </div>
                <div className="mx-3 flex flex-col lg:items-start items-center">
                  <p className="py-2 text-3xl">{manager.nameManag}</p>
                  <p>{manager.jop}</p>
                  <div className="flex gap-2 py-2">
                    {manager.media.iconI}
                    {manager.media.iconL}
                    {manager.media.iconst}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 my-3">
        {Array.from({ length: cardsToShow === 1 ? managers.length : managers.length - cardsToShow + 1 }).map((_, index) => {
          return (
            <li
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[13px] h-[13px] rounded-lg cursor-pointer list-none
               ${index === currentSlide ? "border-2 border-white bg-[#DB4444]" : "bg-[#808080]"}`}
            ></li>
          );
        })}
      </div>
    </div>
  );
}
