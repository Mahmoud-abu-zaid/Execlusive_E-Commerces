import { useTranslation } from "react-i18next";
import { BsTelephoneInbound } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div className="px-10 my-8">
        <div className="py-4">
          <Link to="/" className="text-gray-600">
            {t("Home")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/Contect" className="text-black">
            {t("Contect")}
          </Link>
        </div>
        <div className=" flex flex-wrap md:grid md:grid-cols-[1fr_2fr] justify-center items-center gap-4">
          <div className=" shadow py-10 px-6 w-full">
            <div className="flex gap-4 items-center mb-3">
              <div className="bg-main-color rounded-4xl p-2 w-[40px] h-[40px] flex items-center justify-center ">
                <BsTelephoneInbound className="text-xl text-white " />
              </div>
              <p className="font-bold">{t("Call To Us")}</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
            <hr className=" opacity-20 my-5" />
            <div className="flex gap-4 items-center my-3">
              <div className="bg-main-color rounded-4xl p-2  w-[40px] h-[40px] flex items-center justify-center ">
                <IoMailOutline className="text-xl text-white " />
              </div>
              <p className="font-bold">Write To US</p>
            </div>
            <p>
              Fill out our form and we will contact <br />
              you within 24 hours.
            </p>
            <p className="py-3">Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
          <div className="shadow h-[100%] py-7 pb-4 px-6 flex flex-col gap-4">
            <form>
              <div className="w-full flex gap-3.5 justify-center items-center ">
                <input className="p-2 w-[99%] bg-[#F5F5F5] outline-0" type="text" required placeholder="Your Name" />
                <input className="p-2 w-[99%] bg-[#F5F5F5] outline-0" type="email" required placeholder="Your Email" />
                <input className="p-2 w-[99%] bg-[#F5F5F5] outline-0" type="tel" required placeholder="Your Phone" />
              </div>
              <div className="flex justify-center items-center w-full h-[207px] my-3 rounded">
                <textarea className="p-[5px] w-full h-[207px] outline-0 bg-[#F5F5F5] " name="" id="" placeholder="Your Massage"></textarea>
              </div>
              <div className="flex justify-end py-4">
                <button className="bg-main-color py-3 px-6  rounded text-white">Send Massage</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
