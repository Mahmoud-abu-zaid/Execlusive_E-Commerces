import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaCommentDots, FaXmark } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
interface ContactMassage {
  Name: string;
  Email: string;
  Phone: string;
  Massage: string;
}

export default function Contact() {
  const { t } = useTranslation();
  const ContectUser = useRef<HTMLFormElement>(null);
  const [submittedData, setSubmittedData] = useState<ContactMassage[]>([]);
  const [formInputMassage, setFormInputMassage] = useState<ContactMassage>({
    Name: "",
    Email: "",
    Phone: "",
    Massage: "",
  });
  function yourMassage() {
    const newMassege = [...submittedData, formInputMassage];
    setSubmittedData(newMassege);
    localStorage.setItem("MassagesContect", JSON.stringify(newMassege));

    if (ContectUser.current) {
      emailjs
        .sendForm("service_03983cq", "template_s3sm64n", ContectUser.current, "tDgF_MwIeJrOyta13")
        .then(() => {
          toast.success(t("Your application has been successfully submitted"));
        })
        .catch(() => {
          toast.error(t("An error occurred, please resend the message"));
        });
    }

    setFormInputMassage({ Name: "", Email: "", Phone: "", Massage: "" });
    console.log("date", formInputMassage);
  }

  useEffect(() => {
    const saved = localStorage.getItem("MassagesContect");
    if (saved) {
      setSubmittedData(JSON.parse(saved));
    }
  }, []);

  function handleDeleteMessage(indexToDelete: number) {
    const updated = submittedData.filter((_, index) => index !== indexToDelete);
    setSubmittedData(updated);
    localStorage.setItem("MassagesContect", JSON.stringify(updated));
  }
  const dir = localStorage.getItem("pageDirection");
  return (
    <>
      <div className="sm:px-10 my-8">
        <div className="py-4 px-6">
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
            <p>{t("We are available 24/7, 7 days a week.")}</p>
            <p>{t("Phone")}: +8801611112222</p>
            <hr className=" opacity-20 my-5" />
            <div className="flex gap-4 items-center my-3">
              <div className="bg-main-color rounded-4xl p-2  w-[40px] h-[40px] flex items-center justify-center ">
                <IoMailOutline className="text-xl text-white " />
              </div>
              <p className="font-bold">{t("Write To US")}</p>
            </div>
            <p>
              {t("Fill out our form and we will contact")}
              <br />
              {t("you within 24 hours.")}
            </p>
            <p className="py-3">
              {t("Emails")}: {t("customer@exclusive.com")}
            </p>
            <p>
              {t("Emails")}: {t("support@exclusive.com")}
            </p>
          </div>
          <div className="shadow h-[100%] py-7 pb-2 px-6 flex flex-col gap-4">
            <form
              ref={ContectUser}
              onSubmit={(e) => {
                e.preventDefault();
                yourMassage();
              }}
            >
              <div className="w-full flex gap-3.5 justify-center items-center ">
                <input
                  value={formInputMassage.Name}
                  onChange={(e) => setFormInputMassage({ ...formInputMassage, Name: e.target.value })}
                  className="p-2 w-[99%] bg-[#F5F5F5] outline-0"
                  type="text"
                  name="user_name"
                  required
                  placeholder={t("Your Name")}
                />
                <input
                  value={formInputMassage.Email}
                  onChange={(e) => setFormInputMassage({ ...formInputMassage, Email: e.target.value })}
                  className="p-2 w-[99%] bg-[#F5F5F5] outline-0"
                  type="email"
                  required
                  name="user_email"
                  placeholder={t("Your Email")}
                />
                <input
                  value={formInputMassage.Phone}
                  onChange={(e) => setFormInputMassage({ ...formInputMassage, Phone: e.target.value })}
                  className="p-2 w-[99%] bg-[#F5F5F5] outline-0"
                  type="tel"
                  required
                  name="user_phone"
                  placeholder={t("Your Phone")}
                />
              </div>
              <div className="flex justify-center items-center w-full h-full my-3 rounded">
                <textarea
                  name="message"
                  value={formInputMassage.Massage}
                  onChange={(e) => setFormInputMassage({ ...formInputMassage, Massage: e.target.value })}
                  className="p-[8px] w-full h-full  outline-0 bg-[#F5F5F5] "
                  id=""
                  placeholder={t("Your Massage")}
                  minLength={20}
                ></textarea>
              </div>
              <div className="flex justify-end py-4">
                <button type="submit" className={`${formInputMassage.Massage.length === 0 ? "bg-gray-200 cursor-no-drop text-black" : "bg-main-color text-white cursor-pointer"} py-3 px-6  rounded `}>
                  {t("Send Massage")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full px-10">
        {submittedData.length > 0 && (
          <div className=" w-full">
            {submittedData.map((massage, index) => (
              <div key={index} className="px-3 py-7 mb-3 shadow flex  items-center justify-center  flex-wrap sm:justify-between sm:flex-nowrap">
                <div className="">
                  <h3 className="font-bold mb-2 text-main-color">{t("Your Submitted Message")} </h3>
                  <p className="py-1">{massage.Name}</p>
                  <p className="pt-1 "> {massage.Massage}</p>
                </div>
                <div className="flex flex-col items-center p-2 relative">
                  <button onClick={() => handleDeleteMessage(index)} className={`absolute top-[-15px] ${dir === "rtl" ? "left-1" : "right-1"}  text-main-color cursor-pointer`}>
                    <FaXmark />
                  </button>
                  <FaCommentDots className="text-8xl text-amber-400" />
                  <div className="flex items-center pt-1">
                    <p className="text-xl text-yellow-500">{t("Waiting for review")} </p>
                    <span className="bg-yellow-500 p-[5px] rounded-3xl m-1 mt-3"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
