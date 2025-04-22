import { useState } from "react";

export default function Slider() {
  const sliderImg = [
    { src: "/images/Frame 560.png", alt: "slider description" },
    { src: "/images/banner-1.jpg", alt: "slider description" },
    { src: "/images/490325005_23983225067928901_545568897245271027_n.jpg", alt: "slider description" },
    { src: "/images/Computer-and-its-peripherals_header-com.jpg", alt: "slider description" },
    { src: "/images/maxres12.jpg", alt: "slider description" },
  ];
  const [curruntSlide, setCurruntSlide] = useState(Math.trunc(sliderImg.length / 2));

  function navigationPoints(index: number) {
    setCurruntSlide(index);
  }
  return (
    <>
      <div className=" m-7">
        <div className="relative ">
          <div className="flex overflow-hidden">
            <div className=" min-w-[100%]">
              <img className="w-[892px] h-[344px]" src={sliderImg[curruntSlide].src} alt={sliderImg[curruntSlide].alt} />
            </div>

            <div className=" absolute  flex justify-center items-end bottom-3 gap-4 w-full h-full">
              <ul className="flex justify-center gap-4  items-center">
                {sliderImg.map((_, index) => {
                  return (
                    <li
                      onClick={() => navigationPoints(index)}
                      className={`w-[13px] h-[13px] rounded-lg cursor-pointer
                       ${index === curruntSlide ? " border-2 border-white bg-[#DB4444]" : "bg-[#808080]"}`}
                    ></li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
