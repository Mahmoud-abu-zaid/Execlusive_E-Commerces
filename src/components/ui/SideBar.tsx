import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function SideBar() {
  const  borderDirection=localStorage.getItem("pageDirection")
  const { t } = useTranslation();
  const sideBarLinks = [
    { name: t("Woman’s Fashion"), path: "/" },
    { name: t("Men’s Fashion"), path: "/" },
    { name: t("Electronics"), path: "/" },
    { name: t("Home & Lifestyle"), path: "/" },
    { name: t("Medicine"), path: "/" },
    { name: t("Sports & Outdoor"), path: "/" },
    { name: t("Baby’s & Toys"), path: "/" },
    { name: t("Groceries & Pets"), path: "/" },
    { name: t("Health & Beauty"), path: "/" },
  ];
  return (
    <>
      <div className={`border-[#d0d0d0] w-fit  ${ borderDirection === "rtl" ? " border-l-2" : " border-r-2"}`}>
        <ul className="py-[30px] px-10 w-[270px]">
          {sideBarLinks.map((link, index) => (
            <li className="p-2" key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
