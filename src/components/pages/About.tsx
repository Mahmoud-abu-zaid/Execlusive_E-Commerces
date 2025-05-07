import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import SiteStatistics from "./SiteStatistics";
import Managers from "./Managers";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-[40px]">
        <div className="py-4">
          <Link to="/" className="text-gray-600">
            {t("Home")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/About" className="text-black">
            {t("About")}
          </Link>
        </div>
        <section>
          <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-9 py-7">
            <div className="">
              <h2 className="text-5xl py-9">{t("Our Story")}</h2>
              <p className="pb-6">
                {t("Launced in 2015, Exclusive is South Asia’s premier online shopping")} <br />
                {t("makterplace with an active presense in Bangladesh. Supported")} <br />
                {t("by wide range of tailored marketing, dataand service solutions")}
                <br />
                {t("Exclusive has 10,500 sallers and 300 brands and serves")} <br />
                {t("3 millioons customers across the region.")}
              </p>
              <p>
                {t("Exclusive has more than 1 Million products to offer, growing at a")} <br />
                {t("very fast. Exclusive offers a diverse assotment in categories")} <br />
                {t("ranging from consumer.")}
              </p>
            </div>
            <div className="">
              <img className="" src="/public/images/portrait-two-african-females.png" alt="" />
            </div>
          </div>
        </section>

        <SiteStatistics />
        <Managers />
      </div>
    </>
  );
}
