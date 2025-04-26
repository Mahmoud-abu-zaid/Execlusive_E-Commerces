import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="flex justify-center gap-7 flex-wrap items-center bg-black m-[40px] p-10">
        <div>
          <p className="text-benner-color font-bold text-[16px]">{t("Categories")}</p>
          <h2 className="text-white text-[48px] py-5">
            {t("Enhance Your")}
            <br /> {t("Music Experience")}
          </h2>
          <div className="flex gap-3.5 my-5 ">
            <div className="bg-white rounded-[100%]  text-center  w-[65px] h-[65px] flex flex-col items-center justify-center ">
              <p className="text-xl font-bold">23</p>
              <p className="text-sm leading-3" >{t("Hours")}</p>
            </div>
            <div className="bg-white rounded-[100%]  text-center  w-[65px] h-[65px] flex flex-col items-center justify-center ">
              <p className="text-xl font-bold">05</p>
              <p className="text-sm leading-3" >{t("Days")}</p>
            </div>
            <div className="bg-white rounded-[100%]  text-center  w-[65px] h-[65px] flex flex-col items-center justify-center ">
              <p className="text-xl font-bold">59</p>
              <p className="text-sm leading-3" >{t("Minutes")}</p>
            </div>
            <div className="bg-white rounded-[100%]  text-center  w-[65px] h-[65px] flex flex-col items-center justify-center ">
              <p className="text-xl font-bold">35</p>
              <p className="text-sm leading-3" >{t("Seconds")}</p>
            </div>
          </div>
          <button className="bg-benner-color w-[171px] h-[56px] rounded text-white">{t("Buy Now!")}</button>
        </div>
        <div className="relative z-[1000] ">
          <img className=" p-8 z-4 block" src="/images/earphone.png" alt="" />
          <div>
            <img className=" absolute top-0 -z-10 blur-xl" src="/images/Ellipse 23.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
