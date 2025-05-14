import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "../../Context/context";

interface User {
  id: string;
  name: string;
  emailOrPhoneNumber: string;
  password: string;
}
export default function SignUp() {
  const { setUser } = useUser();
  const [formInput, setFormInput] = useState<User>({
    id: uuidv4(),

    name: "",
    emailOrPhoneNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>(JSON.parse(localStorage.getItem("Data For User") || "[]"));

  function signup() {
    const newUser = [...users, formInput];

    setUsers(newUser);
    localStorage.setItem("Data For User", JSON.stringify(newUser));
    localStorage.setItem("user", JSON.stringify(formInput)); // حفظ المستخدم في localStorage
    setUser(formInput); 

    toast.success(t("Account registration successful"));
    setFormInput({ ...formInput, name: "", emailOrPhoneNumber: "", password: "" });

    navigate("/SignIn");
  }
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-center lg:justify-center mb-[140px] mt-[60px]">
        <div>
          <img className="w-[600px] h-[550px] hidden lg:block" src="/images/beatsnoop.png" alt="" />
        </div>
        <div className="w-[600px] h-[550px] flex justify-center items-center">
          <form
            className=" w-[70%]"
            onSubmit={(e) => {
              e.preventDefault();
              signup();
            }}
          >
            <span className="text-[36px] block">{t("Create an account")}</span>
            <span className="text-[12px] block py-3">{t("Enter your details below")} </span>
            <label className="">
              <input
                value={formInput.name}
                onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
                className=" border-b-2 border-[#808080] my-2 p-2 px-[5px] outline-0 block w-[100%]"
                type="text"
                minLength={1}
                required
                placeholder={t("Name")}
              />
            </label>
            <label>
              <input
                value={formInput.emailOrPhoneNumber}
                onChange={(e) => setFormInput({ ...formInput, emailOrPhoneNumber: e.target.value })}
                className=" border-b-2 border-[#808080] my-2 p-2 px-[5px] outline-0 block w-[100%]"
                type="email"
                required
                placeholder={t("Email or Phone Number")}
              />
            </label>
            <label>
              <input
                value={formInput.password}
                onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
                className="  border-b-2 border-[#808080] my-2 mb-6 p-2 px-[5px] outline-0 block w-[100%]"
                type="password"
                minLength={8}
                required
                placeholder={t("Password")}
              />
            </label>
            <div>
              <button className="text-center bg-[#db4444] w-[100%] text-white p-2 rounded cursor-pointer">{t("Create Account")} </button>
            </div>
            <div className="flex items-center justify-center bg-whtie text-black w-[100 p-2 rounded shadow-sm mt-3 border-[1px] border-[#808080]">
              <FcGoogle className="mx-3" />
              <a href="#">{t("Sign up with Google")} </a>
            </div>
            <div className="text-center mt-3">
              <span className="text-[12px] block py-3">
                {t("Already have an account?")}
                <Link to="/SignIn" className="text-[#db4444] mx-2 p-1 text-[12px] border-b-[1px] border-[#db4444] ">
                  {t("Log in")}
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
