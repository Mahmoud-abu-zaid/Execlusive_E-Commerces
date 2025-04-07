import { Link, NavLink } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Header() {
   const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-evenly items-center h-[81px] border-b-[#d0d0d0] border-b-[1px]">
        <div>
          <Link to="/" className="text-[24px]">{t("Exclusive")}</Link>
        </div>
        <div>
          <NavLink className={({ isActive }) => `mx-4 ${isActive ? "active-link" : "not-active-link"} `} to="/">
            {t("Home")}
          </NavLink>
          <NavLink className={({ isActive }) => `mx-4 ${isActive ? "active-link" : "not-active-link"} `} to="/Contact">
             {t("Contact")}
          </NavLink>
          <NavLink className={({ isActive }) => `mx-4 ${isActive ? "active-link" : "not-active-link"} `} to="/About">
             {t("About")}
          </NavLink>
          <NavLink className={({ isActive }) => `mx-4 ${isActive ? "active-link" : "not-active-link"} `} to="/SignUp">
             {t("Sign Up")}
          </NavLink>
        </div>
        <div className="flex items-center">
          <input type="text" name="" id=""  className="bg-[#f5f5f5] p-2 w-[243px] h-[38px] rounded"  placeholder= {t("What are you looking for?")}/>
          <FaRegHeart className="mx-4"/>
          <MdOutlineShoppingCart />
        </div>
      </div>
    </>
  );
}
