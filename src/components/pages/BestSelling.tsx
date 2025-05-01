import BtnLink from "../ui/BtnLink";
import { toast } from "react-toastify";
import StarRating from "../ui/StarRating";
import { useShop } from "../Context/context";
import { useTranslation } from "react-i18next";
import { FaRegEye, FaRegHeart } from "react-icons/fa6";

export default function BestSelling() {
  const { t } = useTranslation();

  const { addToWishlist, isInWishlist, removeFromWishlist, addToCart, removeCart, isCart } = useShop();

  const dir = localStorage.getItem("pageDirection");

  const BestSellingProdects = [
    {
      id: 7,
      title: t("The north coat"),
      imgProdect: "/images/shirt.png",
      priceAfter: "$260",
      priceBefore: "$360",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 65,
    },
    {
      id: 8,
      title: t("Gucci duffle bag"),
      imgProdect: "images/bag.png",
      priceAfter: "$960",
      priceBefore: "$1160",
      PriceReduction: "-40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 9,
      title: t("RGB liquid CPU Cooler"),
      imgProdect: "/images/graphics_card.png",
      priceAfter: "$260",
      priceBefore: "$360",
      PriceReduction: "- 40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 10,
      title: t("Small BookSelf"),
      imgProdect: "/images/small_bookself.png",
      priceAfter: "$360",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 65,
    },
  ];
  return (
    <>
      <div className="px-[40px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[36px] font-bold">Best Selling Products</h2>
          <BtnLink path="/" title="View All Products" />
        </div>
        <div className="flex justify-center items-center gap-7 py-15">
          {BestSellingProdects.map((prodect) => (
            <div key={prodect.id} className="w-[270px] flex-shrink-0 h-[350px]">
              <div className="flex justify-center items-center w-full h-[250px] relative bg-[#F5F5F5] rounded">
                <img src={prodect.imgProdect} alt={prodect.title} />
                <div className={`absolute h-full  w-full flex flex-col items-end ${dir === "rtl" ? " items-start" : ""} top-2 right-3  duration-300 ease-[0.3s] `}>
                  <FaRegHeart
                    onClick={() => {
                      if (isInWishlist(prodect.id)) {
                        removeFromWishlist(prodect.id);
                        toast.warn(t("Removed from wishlist"));
                      } else {
                        addToWishlist(prodect);
                        toast.success(t("Added to wishlist"));
                      }
                    }}
                    className={`my-2  w-[35px] h-[35px] block rounded-3xl p-[8px] cursor-pointer ${isInWishlist(prodect.id) ? " bg-black text-white" : "bg-white text-black"}`}
                  />
                  <FaRegEye className="my-2 bg-white w-[35px] h-[35px] block rounded-3xl p-[8px] cursor-pointer" />

                  <div
                    className={`absolute bottom-[8px] right-[-12px] left-[12px] bg-black text-white rounded-b-sm ${
                      isCart(prodect.id) ? "opacity-100" : "opacity-0"
                    } hover:opacity-100 duration-300 ease-[0.3s]`}
                  >
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
                      className="p-2 text-center cursor-pointer w-full h-full "
                    >
                      {t("Add the card")}
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-2">
                <h3 className="px-2 mb-1">{prodect.title}</h3>
                <div className="flex items-center px-2 mb-1">
                  <span className="text-[#DB4444]">{prodect.priceAfter}</span>
                  <span className="text-[#808080] ml-2">
                    <del>{prodect.priceBefore}</del>
                  </span>
                </div>

                <div className="flex items-center gap-2 px-2">
                  <StarRating rating={prodect.rating} />
                  <span className="text-[#808080]">{`(${prodect.Quantity})`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
