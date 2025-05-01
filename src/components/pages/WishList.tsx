import { useTranslation } from "react-i18next";
import { useShop } from "../Context/context";
import { toast } from "react-toastify";
import { RiDeleteBin4Line } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist, addToCart, removeCart, isCart } = useShop();
  const { t } = useTranslation();

  return (
    <div className="p-6 py-14 px-7">
      <div className="flex justify-between items-center pb-12 ">
        <div>
          <h2 className="text-xl font-bold">
            {t("Wishlist")} ({wishlist.length})
          </h2>
        </div>
        <div>
          <button
            onClick={() => {
              if (wishlist.length === 0) {
                toast.error(t("No Wish List"));
              } else {
                clearWishlist();
                toast.warn(t("Removed All wishlist"));
              }
            }}
            className="font-bold py-3 px-6 border-2 border-[#808080] rounded text-[16px] cursor-pointer"
          >
            {t("Move All To Bag")}
          </button>
        </div>
      </div>
      {wishlist.length === 0 ? (
        <p className="text-center text-2xl">No products in wishlist.</p>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-8 ">
          {wishlist.map((prodect) => (
            <div key={prodect.id} className=" rounded">
              <div className="w-[270px] h-[250px] flex justify-center items-center bg-[#F5F5F5] rounded relative">
                <img src={prodect.imgProdect} alt={prodect.title} className="w-full h-32 object-contain" />
                <div className=" flex flex-col items-end absolute top-4 right-2 w-full h-full">
                  <RiDeleteBin4Line
                    onClick={() => {
                      removeFromWishlist(prodect.id);
                      toast.warn(t("Removed from wishlist"));
                    }}
                    className="bg-white w-[35px] h-[35px] p-2 rounded-3xl cursor-pointer"
                  />
                  <button
                    onClick={() => {
                      if (isCart(prodect.id)) {
                        removeCart(prodect.id);
                        toast.warn(t("Removed from Cart"));
                      } else {
                        addToCart(prodect);
                        toast.success(t("Added to Cart"));
                      }
                    }}
                    className={`flex justify-center items-center absolute bottom-4 right-0 left-[8px] bg-black text-white p-2 w-full rounded-b-md text-center ${isCart(prodect.id) ? " hidden " : ""}`}
                  >
                    <AiOutlineShoppingCart className=" text-white mx-3" />
                    <p>Add to Cart</p>
                  </button>
                </div>
              </div>
              <div>
                <h3 className=" font-bold mt-2 ">{prodect.title}</h3>
                <div className="flex gap-4">
                  <p className="text-red-500">{prodect.priceAfter}</p>
                  <p className="text-gray-500">
                    <del>{prodect.priceBefore}</del>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
