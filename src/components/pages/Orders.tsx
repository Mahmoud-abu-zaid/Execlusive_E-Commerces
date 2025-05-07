import { useTranslation } from "react-i18next";
import { useShop } from "../Context/context";

export default function Orders() {
  const { t } = useTranslation();
  const { orders } = useShop();
  return (
    <div>
      <h2 className="text-2xl px-[40px] py-5">{t("My Orders")}</h2>

      {orders.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img className="w-[300px] h-[300px] rounded-3xl" src="/images/19197384.jpg" alt="" />
          <p className="py-8 text-3xl">{t("No orders yet.")}</p>
        </div>
      ) : (
        <>
          <table className=" w-[100%] flex justify-center items-center p-2 ">
            <thead className="flex justify-evenly items-center shadow my-1 py-3 w-[98%] ">
              <tr className="w-[30%]">
                <th className=" py-2">{t("Product")}</th>
              </tr>
              <tr className="w-[20%]">
                <th className=" py-2">{t("Price")} </th>
              </tr>
              <tr className="w-[18%]">
                <th className=" py-2">{t("Quantity")}</th>
              </tr>
              <tr className="w-[20%]">
                <th className=" py-2">{t("Subtotal")}</th>
              </tr>
            </thead>
          </table>
          {orders.map((prodect) => (
            <table className="w-[100%] flex justify-center items-center p-2 ">
              <tbody className="flex  justify-around items-center shadow  py-3 w-[98%] ">
                <tr key={prodect.id} className="w-[30%]">
                  <td className="flex items-center md:justify-start flex-wrap justify-center  gap-3 relative">
                    <img src={prodect.imgProdect} alt={t(prodect.title)} className="w-[60px] h-[50px] object-contain" />
                    <h3 className="text-sm text-center">{t(prodect.title)}</h3>
                  </td>
                </tr>
                <tr className="w-[20%]">
                  <td className="px-2">{prodect.priceAfter}</td>
                </tr>

                <tr className="w-[18%]">
                  <td>
                    <p className="px-4">{prodect.orderedQuantity}</p>
                  </td>
                </tr>
                <tr className="w-[20%]">
                  <td className="text-[#db4444] font-bold">{(prodect.orderedSubtotal || 0).toFixed(2)} $</td>
                </tr>
              </tbody>
            </table>
          ))}
        </>
      )}
    </div>
  );
}
