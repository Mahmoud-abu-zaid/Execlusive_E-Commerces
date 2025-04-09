import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

export default function SignUp() {
  const {t}=useTranslation();
  return (
    <>
      <div className="flex items-center justify-center lg:justify-between">
        <div>
          <img className="w-[600px] h-[550px] hidden lg:block" src="/images/beatsnoop.png" alt="" />
        </div>
        <div className="w-[600px] h-[550px] flex justify-center items-center">
          <form>
            <span className="text-[36px] block">Create an account</span>
            <span className="text-[12px] block py-3">Enter your details below</span>
            <label className="">
              <input className=" border-b-2 border-[#808080] my-2 p-2 pl-0 outline-0 block w-[100%]" type="text" placeholder={t("Name")}/>
            </label>
            <label>
              <input className=" border-b-2 border-[#808080] my-2 p-2 pl-0 outline-0 block w-[100%]" type="email" placeholder={t("Email or Phone Number")}/>
            </label>
            <label>
              <input className="  border-b-2 border-[#808080] my-2 p-2 pl-0 outline-0 block w-[100%]" type="password" placeholder={t("Password")}/>
            </label>
            <div>
              <button className="text-center bg-[#db4444] w-[100%] text-white p-2 rounded">Create Account</button>
            </div>
            <div className="flex items-center justify-center bg-whtie text-black w-[100 p-2 rounded shadow-sm mt-3">
            <FcGoogle  className="mx-3"/>
              <a href="#">Sign up with Google</a>
            </div>
            <a href=""></a>
            <div className="text-center mt-3">
              <span className="text-[12px] block py-3">Already have an account? <Link to="/SignIn" className="text-[#db4444]">Log in</Link></span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
