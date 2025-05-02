import { Link } from "react-router";
import { useShop } from "../Context/context";
import { FaXmark } from "react-icons/fa6";
import BtnLink from "../ui/BtnLink";

export default function Cart() {
  const { cart, removeCart, quantities, updateQuantity, subtotal } = useShop();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p className=" text-2xl py-3 text-center">No products in Cart.</p>
      ) : (
        <>
          <table className="w-[100%] shadow ">
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
                  <td className="flex items-center md:justify-start flex-wrap justify-center  gap-3 relative">
                    <img src={prodect.imgProdect} alt={prodect.title} className="w-[60px] h-[50px] object-contain" />
                    <h3 className="text-sm text-center">{prodect.title}</h3>
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
              Return To Shop
            </Link>
            <Link to="/" className="py-3 px-5 bg-gray-50 border-[1px] border-gray-700 rounded font-bold ">
              Update Cart
            </Link>
          </div>
          <div className="flex lg:justify-between justify-center flex-wrap py-5 ">
            <div className="w-[470px]">
              <div className="flex gap-4 py-2 ">
                <input type="text"
                 placeholder="Coupon Code"
                 className="p-2 border-[1px] border-gray-800 rounded bg-gray-50 w-[65%] h-[55px] " />
                <button className="bg-main-color text-white py-2 px-5 rounded cursor-pointer h-[55px] w-[180px]">Apply Coupon</button>
              </div>
            </div>
            <div className=" p-2 flex flex-col gap-4 border-gray-600 border-[1px] shadow rounded w-[470px] my-2">
              <h4>Cart Total</h4>
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{subtotal.toFixed(2)} $</p>
              </div>
              <hr className="border-gray-600 border-[1px] rounded-md" />
              <div className="flex justify-between">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <hr className="border-gray-600 border-[1px] rounded-md" />
              <div className="flex justify-between">
                <p>Total</p>
                <p>{subtotal.toFixed(2)} $</p>
              </div>
              <div className="py-4 m-auto">
                <BtnLink path="/" title="Procees to checkout" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
