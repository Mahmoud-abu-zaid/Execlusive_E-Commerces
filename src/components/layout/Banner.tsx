import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Banner({ local, changeLanguage }: { local: string; changeLanguage: (language: string) => void }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-around items-center bg-black text-white h-[48px]">
        <div></div>
        <span className="text-[#FAFAFA]">
          {t("Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!")}
          <Link to="/" className="pl-2 underline">
            <b>{t("Shop Now")}</b>
          </Link>
        </span>
        <select name="" id="" className="outline-0 pr-1" value={local} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en" className="text-black">
            English
          </option>
          <option value="ar" className="text-black">
          Arabic
          </option>
        </select>
      </div>
    </>
  );
}
