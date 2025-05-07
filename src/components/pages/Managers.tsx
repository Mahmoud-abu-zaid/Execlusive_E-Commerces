import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Managers() {
  const managers = [
    { imgManag: "/images/tom_cruise.png", nameManag: "Tom Cruise", jop: "Founder & Chairman", media: { iconst: <IoLogoInstagram />, iconI: <TiSocialLinkedin />, iconL: <FaXTwitter /> } },
    { imgManag: "/images/will_Smith.png", nameManag: "Will Smith", jop: "Founder & Chairman", media: { iconst: <IoLogoInstagram />, iconI: <TiSocialLinkedin />, iconL: <FaXTwitter /> } },
    {
      imgManag: "/images/snapedit_1746612194757.png",
      nameManag: "Mahmoud Abu Zaid",
      jop: "Front End Developer",
      media: { iconst: <IoLogoInstagram />, iconI: <TiSocialLinkedin />, iconL: <FaXTwitter /> },
    },
    { imgManag: "/images/emma_watson.png", nameManag: "Emma Watson", jop: "Founder & Chairman", media: { iconst: <IoLogoInstagram />, iconI: <TiSocialLinkedin />, iconL: <FaXTwitter /> } },
    { imgManag: "/images/tom_cruise.png", nameManag: "Tom Cruise", jop: "Founder & Chairman", media: { iconst: <IoLogoInstagram />, iconI: <TiSocialLinkedin />, iconL: <FaXTwitter /> } },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);

  const cardsToShow = 3;

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, managers.length - cardsToShow);

    setCurrentSlide(Math.min(index, maxIndex));
  };

  return (
    <div className="relative py-10">
      <div className="flex justify-center overflow-hidden relative">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)` }}>
          {managers.map((manager, index) => (
            <div key={index} className="flex-shrink-0 w-full px-3" style={{ width: `${100 / cardsToShow}%` }}>
              <div className="flex flex-col justify-center">
                <div className=" h-[430px] flex justify-center items-end bg-gray-200">
                  <img className="w-fit h-[387px]" src={manager.imgManag} alt={manager.nameManag} />
                </div>
                <div className="mx-3">
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
        {Array.from({ length: managers.length - cardsToShow + 1 }).map((_, index) => {
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
