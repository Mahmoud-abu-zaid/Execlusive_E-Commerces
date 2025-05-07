import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import SiteStatistics from "./SiteStatistics";

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
              <h2 className="text-5xl py-9">Our Story</h2>
              <p className="pb-6">
                Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data
                and service solutions,
                <br /> Exclusive has 10,500 sallers and 300 brands and serves <br /> 3 millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging from consumer.
              </p>
            </div>
            <div className="">
              <img className="" src="/public/images/portrait-two-african-females.png" alt="" />
            </div>
          </div>
        </section>
        <section>
          <SiteStatistics />
        </section>
        <section>
          
        </section>
      </div>
    </>
  );
}
