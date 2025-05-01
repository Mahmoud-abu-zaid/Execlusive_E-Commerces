import { useState } from "react";
import { useShop } from "../Context/context";
import { FaXmark } from "react-icons/fa6";

export default function Cart() {
  const { cart, removeCart } = useShop();

  // هنا بنبدأ الـ state بـ 1 عشان نسمح للمستخدم يدخل الكمية
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    cart.reduce((acc: { [key: number]: number }, item) => {
      acc[item.id] = 1; // نبدأ من 1 أو أي قيمة default
      return acc;
    }, {})
  );

  // عند تغيير الكمية نحدث الـ state
  const handleQuantityChange = (id: number, value: string) => {
    const qty = Math.max(1, Number(value)); // تأكد أن الكمية على الأقل 1
    setQuantities((prev) => ({
      ...prev,
      [id]: qty,
    }));
  };

  // حساب subtotal بناءً على الكمية المدخلة
  const subtotal = cart.reduce((sum: number, prodect) => {
    const qty = quantities[prodect.id] || 1; // نستخدم الكمية المدخلة من الـ state
    const price = parseFloat(prodect.priceAfter.replace("$", "")) || 0;
    return sum + qty * price;
  }, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p className=" text-2xl py-3">No products in Cart.</p>
      ) : (
        <>
          <table className="w-[100%] shadow my-3">
            <thead className="flex justify-evenly items-center w-[100%] my-3">
              <tr className="w-[30%]">
                <th className=" py-2">Product</th>
              </tr>
              <tr className="w-[20%]">
                <th className=" py-2">Price</th>
              </tr>
              <tr className="w-[20%]">
                <th className=" py-2">Quantity</th>
              </tr>
              <tr className="w-[20%]">
                <th className=" py-2">Subtotal</th>
              </tr>
            </thead>
          </table>
          <table className="w-[100%]  my-3">
            {cart.map((prodect) => (
              <tbody className="flex justify-evenly items-center shadow my-5 py-3 w-[100%]">
                <tr key={prodect.id} className="w-[30%]">
                  <td className="flex items-center gap-3 relative">
                    <img src={prodect.imgProdect} alt={prodect.title} className="w-[60px] h-[50px] object-contain" />
                    <h3 className="text-sm">{prodect.title}</h3>
                    <button className="bg-main-color rounded-full h-5 w-5 flex justify-center items-center text-white cursor-pointer absolute top-[-3px] left-[-10px] right-[-10px]" onClick={() => removeCart(prodect.id)}>
                      <FaXmark  />
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
                      value={quantities[prodect.id] || 1} // هنا الكمية المدخلة
                      onChange={(e) => handleQuantityChange(prodect.id, e.target.value)}
                      className="w-16 p-1 border-2 border-gray-700 shadow rounded text-center outline-0 "
                    />
                  </td>
                </tr>
                <tr className="w-[20%]">
                  <td className="text-[#db4444]">{((quantities[prodect.id] || 1) * (parseFloat(prodect.priceAfter.replace("$", "")) || 0)).toFixed(2)} $</td>
                </tr>
              </tbody>
            ))}
          </table>

          <div className="text-right mt-4 font-bold text-lg">Total: {subtotal.toFixed(2)} $</div>
        </>
      )}
    </div>
  );
}
