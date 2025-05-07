{
  /* import BtnLink from "../ui/BtnLink"; */
}
{
  /* import { v4 as uuidv4 } from "uuid";*/
}

import SectionTitle from "../ui/SectionTitle";
import SideBar from "../ui/SideBar";
import Slider from "../ui/Slider";
import Benner from "../ui/Benner";
import { useTranslation } from "react-i18next";
import Categories from "./Categories";
import ProductsFlashSales from "./ProdectsFlashSales";
import BestSelling from "./BestSelling";
import ExploreOurProducts from "./ExploreOurProducts";
import Featured from "./Featured";
import Service from "./Service";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <SideBar />
          <Slider />
        </div>
        <div>
          <SectionTitle title={t("Today’s")} />
          <ProductsFlashSales />
          <SectionTitle title={t("Categories")} />

          <Categories />
          <SectionTitle title={t("This Month")} />
          <BestSelling />
          <Benner
            tergetDate={{
              days: 5,
              hours: 23,
              minutes: 59,
              seconds: 35,
            }}
            storageKey="Benner"
          />
          <ExploreOurProducts />
          <SectionTitle title={t("Featured")} />
          <Featured />
          <Service />
        </div>
      </div>
    </>
  );
}
