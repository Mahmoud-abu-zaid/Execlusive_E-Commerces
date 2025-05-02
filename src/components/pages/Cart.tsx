import { Link } from "react-router";
import { useShop } from "../Context/context";
import { FaXmark } from "react-icons/fa6";
import BtnLink from "../ui/BtnLink";
import { useTranslation } from "react-i18next";

export default function Cart() {
  const { cart, removeCart, quantities, updateQuantity, subtotal } = useShop();
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <div className="py-4">
        <Link to="/" className="text-gray-600">
          {t("Home")}
        </Link>
        <span className="text-gray-600 px-2">/</span>
        <Link to="/Cart"> {t("Cart")}</Link>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">
          {t("Cart")} ({cart.length}){" "}
        </h2>
      </div>

      {cart.length === 0 ? (
        <div className=" py-14">
          <p className=" text-2xl text-center py-5">{t("No products in Cart.")} </p>
          <div className="m-auto bg-gray-200 w-fit rounded-[100px]">
            <img src="/images/Animation - 1746177658110.gif" alt="" />
          </div>
        </div>
      ) : (
        <>
          <table className="w-[100%] shadow ">
            <thead className="flex justify-evenly items-center w-[100%] my-3">
              <tr className="w-[30%]">
                <th className=" py-2">{t("Product")}</th>
              </tr>
              <tr className="w-[20%]">
                <th className=" py-2">{t("Price")} </th>
              </tr>
              <tr className="w-[20%]">
                <th className=" py-2">{t("Quantity")}</th>
              </tr>
              <tr className="w-[20%]">
                <th className=" py-2">{t("Subtotal")}</th>
              </tr>
            </thead>
          </table>
          <table className="w-[100%]  my-3">
            {cart.map((prodect) => (
              <tbody className="flex justify-evenly items-center shadow my-5 py-3 w-[100%]">
                <tr key={prodect.id} className="w-[30%]">
                  <td className="flex items-center md:justify-start flex-wrap justify-center  gap-3 relative">
                    <img src={prodect.imgProdect} alt={t(prodect.title)} className="w-[60px] h-[50px] object-contain" />
                    <h3 className="text-sm text-center">{t(prodect.title)}</h3>
                    <button
                      className="bg-main-color rounded-full h-5 w-5 flex justify-center items-center text-white cursor-pointer absolute  left-0 right-0 md:left-[-10px] md:top-[-5px] md:right-[-10px]"
                      onClick={() => removeCart(prodect.id)}
                    >
                      <FaXmark />
                    </button>
                  </td>
                </tr>
                <tr className="w-[20%]">
                  <td>{prodect.priceAfter}</td>
                </tr>

                <tr className="w-[20%]">
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={quantities[prodect.id] || 1}
                      onChange={(e) => updateQuantity(prodect.id, Math.max(2, Number(e.target.value)))}
                      className="w-16 p-1 border-2 border-gray-700 shadow rounded text-center outline-0 "
                    />
                  </td>
                </tr>
                <tr className="w-[20%]">
                  <td className="text-[#db4444] font-bold"> {((quantities[prodect.id] || 1) * (parseFloat(prodect.priceAfter.replace("$", "")) || 0)).toFixed(2)} $</td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="flex justify-between">
            <Link to="/" className="py-3 px-5 bg-gray-50 border-[1px] border-gray-700 rounded font-bold ">
              {t("Return To Shop")}
            </Link>
            <Link to="/" className="py-3 px-5 bg-gray-50 border-[1px] border-gray-700 rounded font-bold ">
              {t("Update Cart")}
            </Link>
          </div>
          <div className="flex lg:justify-between justify-center flex-wrap py-5 ">
            <div className="w-[470px]">
              <div className="flex gap-4 py-2 ">
                <input type="text" placeholder={t("Coupon Code")} className="p-2 border-[1px] border-gray-800 rounded bg-gray-50 w-[65%] h-[55px] " />
                <button className="bg-main-color text-white py-2 px-5 rounded cursor-pointer h-[55px] w-[180px]">{t("Apply Coupon")}</button>
              </div>
            </div>
            <div className=" p-2 flex flex-col gap-4 border-gray-600 border-[1px] shadow rounded w-[470px] my-2">
              <h4 className="text-2xl">{t("Cart Total")}</h4>
              <div className="flex justify-between">
                <p>{t("Subtotal")}</p>
                <p>{subtotal.toFixed(2)} $</p>
              </div>
              <hr className="border-gray-600 border-[1px] rounded-md" />
              <div className="flex justify-between">
                <p>{t("Shipping")} :</p>
                <p>{t("Free")}</p>
              </div>
              <hr className="border-gray-600 border-[1px] rounded-md" />
              <div className="flex justify-between">
                <p>{t("Total")}</p>
                <p>{subtotal.toFixed(2)} $</p>
              </div>
              <div className="py-4 m-auto">
                <BtnLink path="/CheckOut" title={t("Procees to checkout")} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
