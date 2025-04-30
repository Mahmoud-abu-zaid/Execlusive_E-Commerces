import { useState } from "react";
import { LuUser } from "react-icons/lu";
import { IoMenu, IoSearch } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { FaRegCircleXmark } from "react-icons/fa6";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";
export default function Header({ local }: { local: string }) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const user = localStorage.getItem("userId");

  const [showMenu, setShowMenu] = useState(false);

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  function logout() {
    localStorage.removeItem("userId");
    navigate("/SignIn");
    toast.success(t("Successfully logged out"));
  }

  /*useEffect(() => {
    if (localStorage.getItem("userId")) {
      navigate("/");
    }
  }, [navigate]);
*/
  const showMenustyle = showMenu ? "block" : "hidden";

  return (
    <>
      <div className="flex justify-around lg:justify-evenly items-center h-[81px] border-b-[#d0d0d0] border-b-[1px]">
        <div>
          <Link to="/" className="text-[24px]">
            {t("Exclusive")}
          </Link>
        </div>

        <div>
          <IoMenu onClick={() => setShowMenu((state) => !state)} className="lg:hidden text-[30px] cursor-pointer" />
          <ul className={`${showMenustyle} lg:flex lg:items-center lg:static absolute lg:bg-white bg-black rounded-xl lg:w-fit text-white p-2 bl `}>
            <li className="my-2 lg:my-0  lg:hover:bg-none">
              <NavLink className={({ isActive }) => `mx-4 text-white lg:text-black  pb-[3px]  ${isActive ? "border-b-2 border-white lg:border-black" : "border-none"} `} to="/">
                {t("Home")}
              </NavLink>
            </li>
            <li className="my-2 lg:my-0  lg:hover:bg-none">
              <NavLink className={({ isActive }) => `mx-4 text-white lg:text-black pb-[3px] ${isActive ? "border-b-2 border-white lg:border-black" : "border-none"} `} to="/Contact">
                {t("Contact")}
              </NavLink>
            </li>
            <li className="my-2 lg:my-0  lg:hover:bg-none">
              <NavLink className={({ isActive }) => `mx-4 text-white lg:text-black pb-[3px] ${isActive ? "border-b-2 border-white lg:border-black" : "border-none"} `} to="/About">
                {t("About")}
              </NavLink>
            </li>
            {!user && (
              <li className="my-2 lg:my-0  lg:hover:bg-none">
                <NavLink className={({ isActive }) => `mx-4 text-white lg:text-black pb-[3px] ${isActive ? "border-b-2 border-white lg:border-black" : "border-none"} `} to="/SignUp">
                  {t("Sign Up")}
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="lg:flex lg:items-center hidden">
          <div className="flex items-center bg-[#f5f5f5] w-[243px] h-[38px] rounded">
            <input type="text" name="" id="" className=" p-2 w-[215px] outline-0" placeholder={t("What are you looking for?")} />
            <IoSearch />
          </div>
          <div>
            <Link to="/Wishlist">
              <FaRegHeart className="mx-4 text-[20px]" />
            </Link>
          </div>
          <div>
            <Link to="/Cart">
              <MdOutlineShoppingCart className="text-[20px]" />
            </Link>
          </div>

          {user && (
            <div>
              <LuUser onClick={() => setShowProfileMenu((state) => !state)} className=" relative cursor-pointer  right-0 text-[25px] mx-4 bg-[#db4444] rounded-4xl p-[4px] text-white" />
              {showProfileMenu && (
                <div className={`absolute z-10 ${local === "ar" ? "left-[5%]" : "right-[5%]"} w-[200px]  text-white bg-black m-2 p-3 rounded-2xl`}>
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
    </>
  );
}
