{
  /* import BtnLink from "../ui/BtnLink"; */
}
{
  /* import { v4 as uuidv4 } from "uuid";*/
}

import Count from "../ui/Count";
import SectionTitle from "../ui/SectionTitle";
import SideBar from "../ui/SideBar";
import Slider from "../ui/Slider";
import Benner from "../ui/Benner";
import { useTranslation } from "react-i18next";
import Categories from "./Categories";
import ProductsFlashSales from "./ProdectsFlashSales";

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
          <Count
            tergetDate={{
              days: 3,
              hours: 23,
              minutes: 19,
              seconds: 56,
            }}
            storageKey="flashSale1"
          />
          <ProductsFlashSales />
          <SectionTitle title={t("Categories")} />
          <Categories />
          <Benner
            tergetDate={{
              days: 5,
              hours: 23,
              minutes: 59,
              seconds: 35,
            }}
            storageKey="Benner"
          />
        </div>
      </div>

      {/*<BtnLink path="/" title="View All Products" />*/}
    </>
  );
}
