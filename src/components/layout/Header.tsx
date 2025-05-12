import { useState } from "react";
import { LuUser } from "react-icons/lu";
import { IoHomeOutline, IoMenu, IoSearch } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { FaRegCircleXmark } from "react-icons/fa6";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { MdContactPhone, MdOutlineShoppingCart, MdRoundaboutRight } from "react-icons/md";
import { toast } from "react-toastify";
import { useShop } from "../Context/context";
import { SiGnuprivacyguard } from "react-icons/si";

export default function Header({ local }: { local: string }) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const user = localStorage.getItem("userId");

  const [showMenu, setShowMenu] = useState(false);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { wishlist, cart } = useShop();

  function logout() {
    localStorage.removeItem("userId");
    navigate("/SignIn");
    toast.success(t("Successfully logged out"));
  }

  const showMenustyle = showMenu ? "block" : "hidden";

  return (
    <>
      <div className="flex justify-around items-center h-[81px] border-b-[#d0d0d0] border-b-[1px]  bg-white z-15">
        <div>
          <Link to="/" className="text-[24px]">
            {t("Exclusive")}
          </Link>
        </div>

        <div className="flex ">
          <div>
            <IoMenu onClick={() => setShowMenu((state) => !state)} className="lg:hidden text-[30px] cursor-pointer" />
            <ul
              className={`${showMenustyle} lg:flex lg:items-center lg:static absolute ${local === "ar" ? "left-[27%]" : "right-[27%]"}  lg:bg-white bg-black rounded-xl lg:w-fit text-white p-2 z-10`}
            >
              <li className="my-2 lg:my-0 hover:bg-main-color lg:hover:bg-white rounded p-1">
                <NavLink
                  className={({ isActive }) => `flex items-center gap-3 px-3  text-white lg:text-black  pb-[3px] ${isActive ? "lg:border-b-2 border-white lg:border-black" : "border-none"} `}
                  to="/"
                >
                  <IoHomeOutline className="text-[20px] lg:hidden block" />
                  {t("Home")}
                </NavLink>
              </li>
              <li className="my-2 lg:my-0  hover:bg-main-color lg:hover:bg-white rounded p-1">
                <NavLink
                  className={({ isActive }) => ` flex items-center gap-3 px-3 text-white lg:text-black pb-[3px] ${isActive ? "lg:border-b-2 border-white lg:border-black" : "border-none"} `}
                  to="/Contact"
                >
                  <MdContactPhone className="text-[20px] lg:hidden block" />
                  {t("Contact")}
                </NavLink>
              </li>
              <li className="my-2 lg:my-0   hover:bg-main-color lg:hover:bg-white rounded p-1">
                <NavLink
                  className={({ isActive }) => `flex items-center px-3 gap-3 text-white lg:text-black pb-[3px] ${isActive ? "lg:border-b-2 border-white lg:border-black" : "border-none"} `}
                  to="/About"
                >
                  <MdRoundaboutRight className="text-[20px] lg:hidden block" />
                  {t("About")}
                </NavLink>
              </li>
              {!user && (
                <li className="my-2 lg:my-0  hover:bg-main-color lg:hover:bg-white rounded p-1">
                  <NavLink
                    className={({ isActive }) => `flex items-center gap-3 px-3 text-white lg:text-black pb-[3px] ${isActive ? "lg:border-b-2 border-white lg:border-black" : "border-none"} `}
                    to="/SignUp"
                  >
                    <SiGnuprivacyguard className="text-[20px] lg:hidden block" />
                    {t("Sign Up")}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <div className="flex items-center ">
            <div className=" hidden items-center lg:flex bg-[#f5f5f5] w-[243px] h-[38px] rounded">
              <input type="text" name="" id="" className=" p-2 w-[215px] outline-0" placeholder={t("What are you looking for?")} />
              <IoSearch />
            </div>
            <div>
              <Link to="/Wishlist" className="relative">
                <FaRegHeart className="mx-4 text-[20px] " />
                <div>
                  <p
                    className={` absolute top-[-10px] right-[5px] bg-main-color text-white text-[14px] p-[6px] rounded-4xl w-5 h-5 flex items-center justify-center duration-300 ease-in-out ${
                      wishlist.length === 0 ? "hidden" : "block"
                    }`}
                  >
                    {wishlist.length}
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/Cart" className="relative">
                <MdOutlineShoppingCart className="text-[20px]" />
                <div>
                  <p
                    className={` absolute top-[-10px] right-[-9px] bg-main-color text-white text-[14px] p-[6px] rounded-4xl w-5 h-5 flex items-center justify-center duration-300 ease-in-out ${
                      cart.length === 0 ? "hidden" : "block"
                    }`}
                  >
                    {cart.length}
                  </p>
                </div>
              </Link>
            </div>

            {user && (
              <div>
                <LuUser onClick={() => setShowProfileMenu((state) => !state)} className=" relative cursor-pointer  right-0 text-[25px] mx-4 bg-[#db4444] rounded-4xl p-[4px] text-white" />
                {showProfileMenu && (
                  <div className={`absolute z-10 ${local === "ar" ? "left-0 sm:left-[5%]" : "right-0 sm:right-[5%]"} w-[200px]  text-white bg-black m-2 p-3 rounded-2xl`}>
                    <ul className="flex flex-col gap-2">
                      <li className="hover:bg-[#db4444] p-2 rounded-md cursor-pointer">
                        <Link to="/Account" className="flex items-center text-[14px] gap-2">
                          <LuUser className="text-[18px]" />
                          {t("Manage My Account")}
                        </Link>
                      </li>

                      <li className="hover:bg-[#db4444] p-2 rounded-md cursor-pointer">
                        <Link to="/Orders" className="flex items-center text-[14px] gap-2">
                          <RiShoppingBag3Line className="text-[18px]" />
                          {t("My Order")}
                        </Link>
                      </li>

                      <li className="hover:bg-[#db4444] p-2 rounded-md cursor-pointer">
                        <Link to="/Cancellations" className="flex items-center text-[14px] gap-2">
                          <FaRegCircleXmark className="text-[18x]" /> {t("My Cancellations")}
                        </Link>
                      </li>

                      <li className="hover:bg-[#db4444] p-2 rounded-md cursor-pointer">
                        <Link to="/Reviews" className="flex items-center text-[14px] gap-2">
                          <FaRegStar className="text-[18x]" /> {t("My Reviews")}
                        </Link>
                      </li>

                      <li className="hover:bg-[#db4444] p-2 rounded-md cursor-pointer ">
                        <button onClick={logout} className="flex items-center text-[14px] gap-2 cursor-pointer font-bold ">
                          <CiLogout className="text-[18px] " /> {t("Logout")}
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
