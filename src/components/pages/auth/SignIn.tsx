import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function SignIn() {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-center lg:justify-center mb-[140px] mt-[60px]">
        <div>
          <img className="w-[600px] h-[550px] hidden lg:block" src="/images/beatsnoop.png" alt="" />
        </div>
        <div className="w-[600px] h-[550px] flex justify-center items-center">
          <form className=" w-[70%]">
            <span className="text-[36px] block">{t("Log in to Exclusive")}</span>
            <span className="text-[12px] block py-3">{t("Enter your details below")} </span>
            <label>
              <input className=" border-b-2 border-[#808080] my-2 p-2 pl-0 outline-0 block w-[100%]" type="email" placeholder={t("Email or Phone Number")} />
            </label>
            <label>
              <input className="  border-b-2 border-[#808080] my-2 mb-6 p-2 pl-0 outline-0 block w-[100%]" type="password" placeholder={t("Password")} />
            </label>
            <div className="flex items-center justify-between">
              <button className="text-center bg-[#db4444]  text-white p-2 rounded cursor-pointer w-[143px] h-[56px]">{t("Log In")} </button>
              <Link to="/ForgetPassword" className="text-[#db4444] text-[16px]">
                {t("Forget Password?")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
