import { useTranslation } from "react-i18next";
import { VscSend } from "react-icons/vsc";
import { Link } from "react-router";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="flex justify-center bg-black px-4 py-10">
        <div className="flex flex-wrap gap-14 text-white">
          <div>
            <span className="block text-[24px] py-3">{t("Exclusive")}</span>
            <span className="block text-[20px] py-2">{t("Subscribe")}</span>
            <span className="block text-[16px]">{t("Get 10% off your first order")}</span>
            <div className="flex items-center my-3 border-2 border-white rounded-md p-2 w-[217px]]">
              <input className=" outline-0 w-[205px]" type="email" placeholder={t("Enter your email")} />
              <VscSend className="text-[20px]" />
            </div>
          </div>

          <div>
            <span className=" block text-[20px] py-3">{t("Support")}</span>
            <span className=" block text-[16px]">
              {t("111 Bijoy sarani, Dhaka,")}
              <br />
              {t("DH 1515, Bangladesh.")}
            </span>
            <span className=" block text-[16px] py-2">exclusive@gmail.com</span>
            <span className=" block text-[16px]">+88015-88888-9999</span>
          </div>

          <div>
            <span className=" block text-[20px] py-3">{t("Account")}</span>
            <ul>
              <li className="text-[16px] py-1">
                <Link to="/Account">{t("My Account")}</Link>
              </li>
              <li className="text-[16px] py-1">
                <Link to="/SignIn">{t("Login")}</Link> / <Link to="/SignUp">Register</Link>
              </li>
              <li className="text-[16px] py-1">
                <Link to="/Cart">{t("Cart")}</Link>
              </li>
              <li className="text-[16px] py-1">
                <Link to="/Wishlist">{t("Wishlist")}</Link>
              </li>
              <li className="text-[16px] py-1">
                <Link to="/Shop">{t("Shop")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <span className=" block text-[20px] py-3">Quick Link</span>
            <ul>
              <li className="text-[16px] py-1">
                <Link to="/Policy">{t("Privacy Policy")}</Link>
              </li>
              <li className="text-[16px] py-1">
                <Link to="/Terms">{t("Terms Of Use")}</Link>
              </li>
              <li className="text-[16px] py-1">
                <Link to="/Faq">{t("FAQ")}</Link>
              </li>
              <li className="text-[16px] py-1">
                <Link to="/Contact">{t("Contact")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[20px] block py-3">Download App</span>
            <span className="text-[12px] block">Save $3 with App New User Only</span>
            <div className="flex items-center mt-3">
              <div>
                <img className="w-[76px] h-[76px]" src="/images/Qrcode 1.png" alt="" />
              </div>
              <div>
                <a href="#">
                  <img className="h-[37px] w-[104px] m-1" src="/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png" alt="" />
                </a>
                <a href="#">
                  <img className="h-[37px] w-[104px] m-1" src="/images/download-appstore.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
