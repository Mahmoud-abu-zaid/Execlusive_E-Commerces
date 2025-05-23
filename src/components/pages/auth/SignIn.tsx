import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useUser } from "../../Context/context";
import { Link, useNavigate } from "react-router";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  function checkIsUserId() {
    if (localStorage.getItem("userId")) {
      navigator("/");
    }
  }

  setTimeout(() => {
    checkIsUserId();
  }, 1000);

  function onSubmit(data: FormInput) {
    const users: User[] = JSON.parse(localStorage.getItem("Data For User") || "[]");

    const userExist = users.find((user) => user.emailOrPhoneNumber === data.emailOrPhoneNumber && user.password === data.password);

    if (userExist) {
      localStorage.setItem("userId", userExist.id);
      localStorage.setItem("user", JSON.stringify(userExist));
      setUser(userExist);
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
          <form onSubmit={handleSubmit(onSubmit)} className="w-[70%]">
            <span className="text-[36px] block">{t("Log in to Exclusive")}</span>
            <span className="text-[12px] block py-3">{t("Enter your details below")} </span>
            <label>
              <input
                type="email"
                placeholder={t("Email or Phone Number")}
                {...register("emailOrPhoneNumber", {
                  required: t("Must enter your email"),
                  pattern: {
                    value: /^[aA-zZ0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                    message: t("Invalid email format"),
                  },
                })}
                className="border-b-2 border-[#808080] my-2 p-2 px-[6px] rounded-t-sm  outline-0 block w-[100%]"
              />
              <p className="text-red-500">{typeof errors?.emailOrPhoneNumber?.message === "string" ? errors.emailOrPhoneNumber.message : ""}</p>
            </label>
            <label>
              <input
                type="password"
                placeholder={t("Password")}
                {...register("password", {
                  required: t("Must enter your password"),
                  pattern: {
                    value: /^[Aa-zA-Z0-9@#$%!.()]{8,}$/,
                    message: t("Password must be 8 to 20 characters, no typing of these symbols is allowed [!^&*_=+- ]"),
                  },
                  maxLength: {
                    value: 20,
                    message: t("The maximum character limit is 20 char"),
                  },
                  minLength: {
                    value: 8,
                    message: t("The minimum number of characters is 8"),
                  },
                })}
                className="border-b-2 border-[#808080] my-2  p-2 px-[6px] rounded-t-sm outline-0 block w-[100%] "
              />
              <p className="text-red-500 mb-6">{typeof errors?.password?.message === "string" ? errors?.password?.message : ""}</p>
            </label>
            <div className="flex items-center justify-between">
              <button type="submit" className="text-center bg-[#db4444]  text-white p-2 rounded cursor-pointer w-[143px] h-[56px]">
                {t("Log In")}
              </button>
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
