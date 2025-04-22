{
  /* import BtnLink from "../ui/BtnLink"; */
}
import Count from "../ui/Count";
import SectionTitle from "../ui/SectionTitle";
import SideBar from "../ui/SideBar";
import Slider from "../ui/Slider";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-center">
        <SideBar />
        <Slider />
      </div>
      <SectionTitle title={t("Today’s")} />
      <Count />
      {/*<BtnLink path="/" title="View All Products" />*/}
    </>
  );
}
