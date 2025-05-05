import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useShop } from "../Context/context";
import { useState } from "react";
import { toast } from "react-toastify";

interface AccountInformation {
  id?: string;
  FirstName: string;
  CompanyName: string;
  StreetAddress: string;
  Apartment: string;
  City: string;
  PhoneNumber: number;
  EmailAddress: string;
  PaymentMethod: string;
}

export default function CheckOut() {
  const { t } = useTranslation();
  const { cart, subtotal, quantities, clearCart } = useShop();

  const [recordingPhysics, setRecordingPhysics] = useState<AccountInformation>({
    FirstName: "",
    CompanyName: "",
    StreetAddress: "",
    Apartment: "",
    City: "",
    PhoneNumber: 0,
    EmailAddress: "",
    PaymentMethod: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecordingPhysics((prev) => ({
      ...prev,
      [name]: name === "PhoneNumber" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting Data: ", recordingPhysics);
    setRecordingPhysics({
      FirstName: "",
      CompanyName: "",
      StreetAddress: "",
      Apartment: "",
      City: "",
      PhoneNumber: 0,
      EmailAddress: "",
      PaymentMethod: "",
    });
    toast.success(t("Application successfully submitted"));
    clearCart();
  };

  return (
    <>
      <div className="p-4 pb-9">
        <div className="py-4">
          <Link to="/" className="text-gray-600">
            {t("Account")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/" className="text-gray-600">
            {t("My Account")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/" className="text-gray-600">
            {t("Product")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/" className="text-gray-600">
            {t("View Cart")}
          </Link>
          <span className="text-gray-600 px-2">/</span>

          <Link to="/Cart"> {t("CheckOut")}</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl py-5">{t("Billing Details")}</h2>
          <div className="flex justify-around flex-wrap gap-7">
            <div className="w-[100%] md:w-[50%]">
              <div className="">
                <label className=" block p-2 px-0 text-[#999999]">
                  {t("First Name")} <span className="text-red-500 px-2">*</span>
                </label>

                <input type="text" name="FirstName" value={recordingPhysics.FirstName} onChange={handleChange} className="bg-[#F5F5F5] w-[100%] p-2" required />
              </div>
              <div>
                <label className=" block p-2 px-0 text-[#999999]">{t("Company Name")} </label>
                <input type="text" name="CompanyName" value={recordingPhysics.CompanyName} onChange={handleChange} className="bg-[#F5F5F5] w-[100%] p-2" />
              </div>
              <div>
                <label className=" block p-2 px-0 text-[#999999]">
                  {t("Street Address")} <span className="text-red-500 px-2">*</span>
                </label>
                <input type="text" name="StreetAddress" value={recordingPhysics.StreetAddress} onChange={handleChange} className="bg-[#F5F5F5] w-[100%] p-2" required />
              </div>
              <div>
                <label className=" block p-2 px-0 text-[#999999]">{t("Apartment, floor, etc. (optional)")}</label>
                <input type="text" name="Apartment" value={recordingPhysics.Apartment} onChange={handleChange} className="bg-[#F5F5F5] w-[100%] p-2" />
              </div>
              <div>
                <label className=" block p-2 px-0 text-[#999999]">
                  {t("Town/City")} <span className="text-red-500 px-2">*</span>
                </label>
                <input type="text" name="City" value={recordingPhysics.City} onChange={handleChange} className="bg-[#F5F5F5] w-[100%] p-2" required />
              </div>
              <div>
                <label className=" block p-2 px-0 text-[#999999]">
                  {t("Phone Number")}
                  <span className="text-red-500 px-2">*</span>
                </label>
                <input type="number" name="PhoneNumber" value={recordingPhysics.PhoneNumber} onChange={handleChange} className="bg-[#F5F5F5] w-[100%] p-2" required />
              </div>
              <div>
                <label className=" block p-2 px-0 text-[#999999]">
                  {t("Email Address")} <span className="text-red-500 px-2">*</span>
                </label>
                <input type="email" name="EmailAddress" value={recordingPhysics.EmailAddress} onChange={handleChange} className="bg-[#F5F5F5] w-[100%] p-2" required />
              </div>
            </div>
            <div className="md:w-[35%] w-[95%] flex flex-col gap-5">
              {cart.map((prodect) => (
                <div key={prodect.id}>
                  <div className="flex  justify-between items-center gap-3 relative">
                    <div className="flex items-center gap-4">
                      <img src={prodect.imgProdect} alt={t(prodect.title)} className="w-[60px] h-[50px] object-contain" />
                      <h3 className="text-sm text-center">{t(prodect.title)}</h3>
                    </div>
                    <div>
                      <p> ${((quantities[prodect.id] || 1) * (parseFloat(prodect.priceAfter.replace("$", "")) || 0)).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <div className="flex justify-between">
                  <p>{t("Subtotal")}</p>
                  <p>{subtotal.toFixed(2)} $</p>
                </div>
                <hr className="border-gray-600 border-[1px] rounded-md my-3" />
                <div className="flex justify-between">
                  <p>{t("Shipping")} :</p>
                  <p>{t("Free")}</p>
                </div>
                <hr className="border-gray-600 border-[1px] rounded-md my-3" />
                <div className="flex justify-between">
                  <p>{t("Total")}</p>
                  <p>{subtotal.toFixed(2)} $</p>
                </div>
                <div className="flex flex-col gap-4 py-4">
                  <div className="flex gap-2">
                    <input type="radio" value="Bank" name="PaymentMethod" checked={recordingPhysics.PaymentMethod === "Bank"} onChange={handleChange} />
                    <div className="flex justify-between w-[100%] ">
                      <div>
                        <p>{t("Bank")}</p>
                      </div>
                      <div className="flex gap-4">
                        <img src="/images/image 30.png" className="w-[30px] h-[20px]" alt="" />
                        <img src="/images/image 32.png" className="w-[30px] h-[20px]" alt="" />
                        <img src="/images/image 33.png" className="w-[30px] h-[20px]" alt="" />
                        <img src="/images/image 31.png" className="w-[30px] h-[20px]" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input type="radio" value="CashOnDelivery" name="PaymentMethod" checked={recordingPhysics.PaymentMethod === "CashOnDelivery"} onChange={handleChange} />
                    <p>{t("Cash on delivery")}</p>
                  </div>
                </div>
                <div>
                  <div className="flex lg:justify-between justify-center flex-wrap py-5 md:w-[110%] w-[105%]">
                    <div className="w-[120%]">
                      <div className="flex gap-4 py-2 ">
                        <input type="text" placeholder={t("Coupon Code")} className="p-2 border-[1px] border-gray-800 rounded bg-gray-50 w-[65%] h-[55px] " />
                        <button className="bg-main-color text-white py-2 px-5 rounded cursor-pointer w-[211px]">{t("Apply Coupon")}</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" className="bg-main-color cursor-pointer text-white py-3 px-6 rounded">
                    {t("Place Order")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
