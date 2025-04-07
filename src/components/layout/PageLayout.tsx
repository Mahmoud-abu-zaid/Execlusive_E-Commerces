import { useState } from "react";
import { useTranslation } from "react-i18next";
import Banner from "./Banner";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";


export default function PageLayout() {
  const { i18n } = useTranslation();

  const [local, setLocal] = useState(localStorage.getItem("i18nextlanguage") || "en");

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
      <div dir={local === "ar" ? "rtl" : "ltr"}>
        <Banner local={local} changeLanguage={changeLanguage} />
        <Header  />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
