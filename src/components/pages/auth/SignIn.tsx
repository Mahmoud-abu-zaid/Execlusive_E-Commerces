import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useUser } from "../../Context/context";

interface User {
  id: string;
  name?: string;
  emailOrPhoneNumber?: string;
  password?: string;

  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
}
interface FormInput {
  emailOrPhoneNumber: string;
  password: string;
}

export default function SignIn() {
  const { t } = useTranslation();

  const { setUser } = useUser();

  const navigator = useNavigate();

  const [formInput, setFormInput] = useState<FormInput>({
    emailOrPhoneNumber: "",
    password: "",
  });

  function login() {
    const users: User[] = JSON.parse(localStorage.getItem("Data For User") || "[]");

    const userExist = users.find((user) => {
      if (user.emailOrPhoneNumber === formInput.emailOrPhoneNumber && user.password === formInput.password) {
        // حفظ المستخدم في localStorage و context
        localStorage.setItem("userId", user.id);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user); // تحديث context
        return user;
      }
    });
    if (userExist) {
      toast.success(t("Login successfully"));
      navigator("/");
    } else {
      toast.error(t("There is an error. Try again."));
    }
  }

  return (
    <>
      <div className="flex items-center justify-center lg:justify-center mb-[140px] mt-[60px]">
        <div>
          <img className="w-[600px] h-[550px] hidden lg:block" src="/images/beatsnoop.png" alt="" />
        </div>
        <div className="w-[600px] h-[550px] flex justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
            className=" w-[70%]"
          >
            <span className="text-[36px] block">{t("Log in to Exclusive")}</span>
            <span className="text-[12px] block py-3">{t("Enter your details below")} </span>
            <label>
              <input
                onChange={(e) => setFormInput({ ...formInput, emailOrPhoneNumber: e.target.value })}
                value={formInput.emailOrPhoneNumber}
                className=" border-b-2 border-[#808080] my-2 p-2 pl-0 outline-0 block w-[100%]"
                type="email"
                required
                placeholder={t("Email or Phone Number")}
              />
            </label>
            <label>
              <input
                value={formInput.password}
                onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}
                className="  border-b-2 border-[#808080] my-2 mb-6 p-2 pl-0 outline-0 block w-[100%]"
                type="password"
                minLength={8}
                required
                placeholder={t("Password")}
              />
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
