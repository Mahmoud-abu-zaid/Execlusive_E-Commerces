import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import BtnLink from "../ui/BtnLink";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-10">
        <div className="py-4">
          <Link to="/" className="text-gray-600">
            {t("Home")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/Contect" className="text-black">
            {t("404")}
          </Link>
        </div>
        <div className="px-10 py-10 flex flex-col justify-center items-center">
          <h2 className="lg:text-8xl text-5xl">{t("404 Not Found")}</h2>
          <p className="py-10">{t("Your visited page not found. You may go home page.")} </p>
          <BtnLink path="/" title={t("Back to home page")} />
        </div>
      </div>
    </>
  );
}
