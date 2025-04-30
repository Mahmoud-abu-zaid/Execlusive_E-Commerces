import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Banner from "./Banner";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

export default function PageLayout() {
  const { i18n } = useTranslation();
  const [local, setLocal] = useState(localStorage.getItem("i18nextLng") || "en");
  const [direction, setDirection] = useState(localStorage.getItem("pageDirection") || (local === "ar" ? "rtl" : "ltr"));

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  function changeLanguage(newLang: string) {
    const newDirection = newLang === "ar" ? "rtl" : "ltr";

    setLocal(newLang);
    setDirection(newDirection);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newDirection;

    localStorage.setItem("i18nextLng", newLang);
    localStorage.setItem("pageDirection", newDirection);
  }
  return (
    <>
      <ToastContainer />
      <div dir={direction}>
        <Banner local={local} changeLanguage={changeLanguage} />
        <Header local={local} />
        <Outlet />        
        <Footer local={local} />
      </div>
    </>
  );
}
