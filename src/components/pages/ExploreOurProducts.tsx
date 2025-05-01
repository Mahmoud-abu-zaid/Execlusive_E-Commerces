import { toast } from "react-toastify";
import StarRating from "../ui/StarRating";
import { useShop } from "../Context/context";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight, FaRegEye, FaRegHeart } from "react-icons/fa6";
import { useState } from "react";

export default function ExploreOurProducts() {
  const { t } = useTranslation();
  const ExploreProducts = [
    {
      id: 11,
      title: t("Breed Dry Dog Food"),
      imgProdect: "/images/dog_food.png",
      priceAfter: "$100",
      priceBefore: "",
      PriceReduction: "",
      rating: 3,
      Quantity: 65,
    },
    {
      id: 12,
      title: t("CANON EOS DSLR Camera"),
      imgProdect: "/images/camera.png",
      priceAfter: "$960",
      priceBefore: "",
      PriceReduction: "-40%",
      rating: 3.5,
      Quantity: 65,
    },
    {
      id: 13,
      title: t("ASUS FHD Gaming Laptop"),
      imgProdect: "/images/labtop.png",
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 14,
      title: t("Curology Product Set"),
      imgProdect: "/images/Curology_Product_Set.png",
      priceAfter: "$360",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 2,
      Quantity: 65,
    },
    {
      id: 15,
      title: t("Kids Electric Car"),
      imgProdect: "/images/Kids_Car.png",
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 65,
    },
    {
      id: 16,
      title: t("Jr. Zoom Soccer Cleats"),
      imgProdect: "/images/Copa_Sense.png",
      priceAfter: "$960",
      priceBefore: "",
      PriceReduction: "-40%",
      rating: 2,
      Quantity: 65,
    },
    {
      id: 17,
      title: t("GP11 Shooter USB Gamepad"),
      imgProdect: "/public/images/PlayStation_arm_2.png",
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 18,
      title: t("Quilted Satin Jacket"),
      imgProdect: "/public/images/jacket.png",
      priceAfter: "$360",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 4,
      Quantity: 65,
    },
    {
      id: 19,
      title: t("The north coat"),
      imgProdect: "/images/shirt.png",
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 3,
      Quantity: 65,
    },
    {
      id: 20,
      title: t("Gucci duffle bag"),
      imgProdect: "images/bag.png",
      priceAfter: "$960",
      priceBefore: "",
      PriceReduction: "-40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 21,
      title: t("RGB liquid CPU Cooler"),
      imgProdect: "/images/graphics_card.png",
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 22,
      title: t("Small BookSelf"),
      imgProdect: "/images/small_bookself.png",
      priceAfter: "",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 65,
    },
    {
      id: 23,
      title: t("Breed Dry Dog Food"),
      imgProdect: "/images/dog_food.png",
      priceAfter: "$100",
      priceBefore: "",
      PriceReduction: "",
      rating: 3,
      Quantity: 65,
    },
    {
      id: 24,
      title: t("CANON EOS DSLR Camera"),
      imgProdect: "/images/camera.png",
      priceAfter: "$960",
      priceBefore: "",
      PriceReduction: "-40%",
      rating: 3.5,
      Quantity: 65,
    },
    {
      id: 25,
      title: t("ASUS FHD Gaming Laptop"),
      imgProdect: "/images/labtop.png",
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 26,
      title: t("Curology Product Set"),
      imgProdect: "/images/Curology_Product_Set.png",
      priceAfter: "$360",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 2,
      Quantity: 65,
    },
  ];

  const { addToWishlist, isInWishlist, removeFromWishlist, addToCart, removeCart, isCart } = useShop();
  const [position, setPosition] = useState(0);
  const itemsPerSlide = 8;
  const totalSlides = Math.ceil(ExploreProducts.length / itemsPerSlide);

  const visibleProducts = ExploreProducts.slice(position * itemsPerSlide, (position + 1) * itemsPerSlide);
  const dir = localStorage.getItem("pageDirection");

  const handleNext = () => {
    setPosition((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const handleBack = () => {
    setPosition((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <>
      <div className="px-[40px]">
        <div className="flex justify-between items-center ">
          <h2 className="text-[36px] font-bold">{t("Explore Our Products")}</h2>
          <div>
            <div className="flex gap-3">
              <button onClick={dir === "rtl" ? handleNext : handleBack} className="bg-gray-300 text-black rounded-full p-3 cursor-pointer hover:bg-gray-400 transition">
                <FaArrowLeft className={`transition-transform ${dir === "rtl" ? "rotate-180" : ""}`} />
              </button>

              <button onClick={dir === "rtl" ? handleBack : handleNext} className="bg-gray-300 text-black rounded-full p-3 cursor-pointer hover:bg-gray-400 transition">
                <FaArrowRight className={`transition-transform ${dir === "rtl" ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>
        <div className={`flex justify-center items-center flex-wrap gap-7 py-15 `}>
          {visibleProducts.map((prodect) => (
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
                <div className="flex gap-3 items-center px-2 mb-1">
                  <span className="text-[#DB4444]">{prodect.priceAfter}</span>
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
