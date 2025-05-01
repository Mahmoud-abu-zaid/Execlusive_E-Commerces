import { useTranslation } from "react-i18next";

export default function Featured() {
  const { t } = useTranslation();
  return (
    <>
      <div className="p-[40px] pt-0">
        <div className="pb-6">
          <h2 className="text-[36px] font-bold">{t("New Arrival")}</h2>
        </div>
        <div className=" flex justify-center flex-wrap gap-3">
          <div>
            <div className="bg-black relative w-fit px-6 pt-18 rounded">
              <img src="/images/playstation.png" alt="" />
              <div className=" absolute text-white bottom-8 ">
                <h3 className="text-[24px] py-4 font-bold">{t("PlayStation 5")}</h3>
                <p>
                  {t("Black and White version of the PS5")}<br /> {t("coming out on sale.")}
                </p>
                <button className="my-4 border-b-2 border-gray-600 cursor-pointer">{t("Shop Now")}</button>
              </div>
            </div>
          </div>

          <div>
            <div className="relative mb-4 bg-[#0D0D0D] rounded flex justify-end">
              <img className="rounded" src="/images/attractive-woman-wearing-hat-posing-black-background 1.png" alt="" />
              <div className=" absolute text-white bottom-2 left-6 right-6">
                <h3 className="text-[24px] py-4 font-bold">{t("Women’s Collections")}</h3>
                <p>
                  {t("Featured woman collections that")}<br />{t("give you another vibe.")} 
                </p>
                <button className="my-4 border-b-2 border-gray-600 cursor-pointer">{t("Shop Now")}</button>
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-4">
              <div className="relative flex justify-center bg-[#0D0D0D] md:w-fit w-full rounded">
                <div className="flex items-center justify-center w-[270px] h-[284px]">
                  <img src="/images/speakers.png" alt="" />
                </div>
                <div className=" absolute bottom-0 text-white left-6 right-6">
                  <h3 className="text-[24px] py-2 font-bold">{t("Speakers")}</h3>
                  <p>{t("Amazon wireless speakers")}</p>
                  <button className="my-3 border-b-2 border-gray-600 cursor-pointer">{t("Shop Now")}</button>
                </div>
              </div>
              <div className="relative flex justify-center bg-[#0D0D0D] md:w-fit w-full rounded">
                <div className="flex items-center justify-center w-[270px] h-[284px]">
                  <img src="/images/652e82cd70aa6522dd785109a455904c.png" alt="" />
                </div>
                <div className=" absolute bottom-0 text-white left-6 right-6">
                  <h3 className="text-[24px] py-2 font-bold">{t("Perfume")}</h3>
                  <p>{t("GUCCI INTENSE OUD EDP")}</p>
                  <button className="my-3 border-b-2 border-gray-600 cursor-pointer">{t("Shop Now")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
