import { useState } from "react";
import { useTranslation } from "react-i18next";
import Banner from "./Banner";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

export default function PageLayout() {
  const { i18n } = useTranslation();
  const [local, setLocal] = useState(localStorage.getItem("i18nextlanguage") || "en");
  const direction = local === "ar" ? "rtl" : "ltr";

  function changeLanguage(language: string) {
    if (language == "ar") {
      setLocal("ar");
      i18n.changeLanguage("ar");
    } else if (language == "en") {
      setLocal("en");
      i18n.changeLanguage("en");
    }
  }
  return (
    <>
      <div dir={direction}>
        <Banner local={local} changeLanguage={changeLanguage} />
        <Header local={local} />
        <Outlet />
        <Footer local={local}/>
      </div>
    </>
  );
}
