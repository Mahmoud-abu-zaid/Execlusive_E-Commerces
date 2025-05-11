import { Link, useNavigate, useParams } from "react-router";
import { useShop } from "../Context/context";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import StarRating from "../ui/StarRating";
import { FaRegHeart } from "react-icons/fa6";
import { toast } from "react-toastify";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";

interface Product {
  id: number;
  title: string;
  imgProdect: {
    [color: string]: string[];
  };
  priceAfter: string;
  priceBefore: string;
  PriceReduction: string;
  rating: number;
  Quantity: number;
  color?: string;
}

export default function ProductDetails() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { addToWishlist, isInWishlist, removeFromWishlist, updateQuantity, addToCart, cart } = useShop();

  const { productId } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [mainImage, setMainImage] = useState<string>("");

  const [product, setProduct] = useState<Product | null>(null);

  const [selectedColor, setSelectedColor] = useState<string>("");

  const increase = () => setQuantity((prev) => prev + 1);

  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);

    setQuantity(value);
  };

  function CheckLogIn() {
    const checkId = localStorage.getItem("userId");

    if (!product) return;

    const selectedImage = product.imgProdect[selectedColor]?.[0] || "";

    const productForCart = {
      ...product,
      imgProdect: selectedImage,
      color: selectedColor,
    };

    const isInCart = cart.some((item) => item.id === productForCart.id && item.color === productForCart.color);

    if (isInCart) {
      toast.warn(t("This product is already added to the cart"));
      return;
    }

    addToCart(productForCart);
    updateQuantity(product.id, quantity);

    if (checkId) {
      navigate("/CheckOut");
    } else {
      navigate("/SignIn");
      toast.warn(t("Please sign in first."));
    }
  }
  const products: Product[] = [
    {
      id: 1,
      title: t("HAVIT HV-G92 Gamepad"),
      imgProdect: {
        red: ["/images/PlayStation_arm.png", "/images/e48ba28f17f703b10d95c3d967fa7e75.jpg", "/images/51FEHX-pzlL._AC_UF894,1000_QL80_.jpg"],
        blue: ["/images/hv-g92-3-500x500-1.jpg", "/images/51FEHX-pzlL._AC_UF894,1000_QL80_.jpg", "/images/,m[.jpg", "/images/item_Havit-HV-G92-Vibration-Game-Pad-__1650281875-550x350h.jpg"],
      },
      priceAfter: "$120",
      priceBefore: "$160",
      PriceReduction: "-40%",
      rating: 5,
      Quantity: 88,
    },
    {
      id: 2,
      title: t("AK-900 Wired Keyboard"),
      imgProdect: {
        red: ["/images/keyboard.png", "/images/0628dc4f.jpg", "/images/ak-600-01-500x500.jpg"],
        green: ["/images/keyboard.png", "/images/imice-ak900-keyboard-400x400.jpg", "/images/TBD0602123801_B1.jpg", "/images/TBD0602123801_B6.jpg"],
      },
      priceAfter: "$960",
      priceBefore: "$1160",
      PriceReduction: "- 35%",
      rating: 4,
      Quantity: 75,
    },
    {
      id: 3,
      title: t("IPS LCD Gaming Monitor"),
      imgProdect: {
        moniter: ["/images/g27cq4-500x500 1.png", "/images/717hskbUC5L.jpg", "/images/MSIG274QPX27_WQHD240HzGamingMonitor.webp"],
      },
      priceAfter: "$375",
      priceBefore: "$400",
      PriceReduction: "- 30%",
      rating: 3,
      Quantity: 99,
    },
    {
      id: 4,
      title: t("S-Series Comfort Chair "),
      imgProdect: {
        Chair: ["/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png", "/images/595028-Product-0-I-637943432577510568.webp"],
      },
      priceAfter: "$375",
      priceBefore: "$400",
      PriceReduction: "- 25%",
      rating: 4.5,
      Quantity: 99,
    },
    {
      id: 5,
      title: t("HAVIT HV-G92 Gamepad"),
      imgProdect: {
        red: ["/images/PlayStation_arm.png", "/images/e48ba28f17f703b10d95c3d967fa7e75.jpg", "/images/51FEHX-pzlL._AC_UF894,1000_QL80_.jpg"],
        blue: ["/images/hv-g92-3-500x500-1.jpg", "/images/51FEHX-pzlL._AC_UF894,1000_QL80_.jpg", "/images/,m[.jpg", "/images/item_Havit-HV-G92-Vibration-Game-Pad-__1650281875-550x350h.jpg"],
      },
      priceAfter: "$120",
      priceBefore: "$160",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 88,
    },
    {
      id: 6,
      title: t("AK-900 Wired Keyboard"),
      imgProdect: {
        red: ["/images/keyboard.png", "/images/0628dc4f.jpg", "/images/ak-600-01-500x500.jpg"],
        green: ["/images/keyboard.png", "/images/imice-ak900-keyboard-400x400.jpg", "/images/TBD0602123801_B1.jpg", "/images/TBD0602123801_B6.jpg"],
      },
      priceAfter: "$960",
      priceBefore: "$1160",
      PriceReduction: "- 35%",
      rating: 4,
      Quantity: 75,
    },
    {
      id: 7,
      title: t("IPS LCD Gaming Monitor"),
      imgProdect: {
        moniter: ["/images/g27cq4-500x500 1.png", "/images/717hskbUC5L.jpg", "/images/MSIG274QPX27_WQHD240HzGamingMonitor.webp"],
      },
      priceAfter: "$375",
      priceBefore: "$400",
      PriceReduction: "- 30%",
      rating: 3,
      Quantity: 99,
    },
    {
      id: 8,
      title: t("The north coat"),
      imgProdect: { Pink: ["/images/shirt.png"] },
      priceAfter: "$260",
      priceBefore: "$360",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 65,
    },
    {
      id: 9,
      title: t("Gucci duffle bag"),
      imgProdect: { Khaki: ["/images/bag.png"] },
      priceAfter: "$960",
      priceBefore: "$1160",
      PriceReduction: "-40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 10,
      title: t("RGB liquid CPU Cooler"),
      imgProdect: { Blue: ["/images/graphics_card.png"] },
      priceAfter: "$260",
      priceBefore: "$360",
      PriceReduction: "- 40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 11,
      title: t("Small BookSelf"),
      imgProdect: {
        Peru: ["/images/small_bookself.png"],
      },
      priceAfter: "$360",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 65,
    },
    {
      id: 12,
      title: t("Breed Dry Dog Food"),
      imgProdect: { Eminence: ["/images/dog_food.png"] },
      priceAfter: "$100",
      priceBefore: "",
      PriceReduction: "",
      rating: 3,
      Quantity: 65,
    },
    {
      id: 13,
      title: t("CANON EOS DSLR Camera"),
      imgProdect: { camera: ["/images/camera.png"] },
      priceAfter: "$960",
      priceBefore: "",
      PriceReduction: "-40%",
      rating: 3.5,
      Quantity: 65,
    },
    {
      id: 14,
      title: t("ASUS FHD Gaming Laptop"),
      imgProdect: { labtop: ["/images/labtop.png"] },
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 15,
      title: t("Curology Product Set"),
      imgProdect: { Jacarta: ["/images/Curology_Product_Set.png"] },
      priceAfter: "$360",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 2,
      Quantity: 65,
    },
    {
      id: 16,
      title: t("Kids Electric Car"),
      imgProdect: { red: ["/images/Kids_Car.png"] },
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 65,
    },
    {
      id: 17,
      title: t("Jr. Zoom Soccer Cleats"),
      imgProdect: { Icterine: ["/images/Copa_Sense.png"] },
      priceAfter: "$960",
      priceBefore: "",
      PriceReduction: "-40%",
      rating: 2,
      Quantity: 65,
    },
    {
      id: 18,
      title: t("GP11 Shooter USB Gamepad"),
      imgProdect: { black: ["/images/PlayStation_arm_2.png"] },
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 19,
      title: t("Quilted Satin Jacket"),
      imgProdect: { Green: ["/images/jacket.png"] },
      priceAfter: "$360",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 4,
      Quantity: 65,
    },
    {
      id: 20,
      title: t("The north coat"),
      imgProdect: { Pink: ["/images/shirt.png"] },
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 3,
      Quantity: 65,
    },
    {
      id: 21,
      title: t("Gucci duffle bag"),
      imgProdect: { Khaki: ["images/bag.png"] },
      priceAfter: "$960",
      priceBefore: "",
      PriceReduction: "-40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 22,
      title: t("RGB liquid CPU Cooler"),
      imgProdect: { blue: ["/images/graphics_card.png"] },
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 23,
      title: t("Small BookSelf"),
      imgProdect: { Peru: ["/images/small_bookself.png"] },
      priceAfter: "",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 65,
    },
    {
      id: 24,
      title: t("Breed Dry Dog Food"),
      imgProdect: { Eminence: ["/images/dog_food.png"] },
      priceAfter: "$100",
      priceBefore: "",
      PriceReduction: "",
      rating: 3,
      Quantity: 65,
    },
    {
      id: 25,
      title: t("CANON EOS DSLR Camera"),
      imgProdect: { camera: ["/images/camera.png"] },
      priceAfter: "$960",
      priceBefore: "",
      PriceReduction: "-40%",
      rating: 3.5,
      Quantity: 65,
    },
    {
      id: 26,
      title: t("ASUS FHD Gaming Laptop"),
      imgProdect: { labtop: ["/images/labtop.png"] },
      priceAfter: "$260",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 4.5,
      Quantity: 65,
    },
    {
      id: 27,
      title: t("Curology Product Set"),
      imgProdect: { Jacarta: ["/images/Curology_Product_Set.png"] },
      priceAfter: "$360",
      priceBefore: "",
      PriceReduction: "- 40%",
      rating: 2,
      Quantity: 65,
    },
  ];

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(productId || ""));
    if (foundProduct) {
      setProduct(foundProduct);

      const firstColor = Object.keys(foundProduct.imgProdect)[0];

      setSelectedColor(firstColor);

      setMainImage(foundProduct.imgProdect[firstColor][0]);
    }
  }, [productId]);

  const handleAddToWishlist = () => {
    if (!product) return;

    const selectedImage = product.imgProdect[selectedColor]?.[0] || "";

    const productForWishlist = {
      ...product,

      imgProdect: selectedImage,

      imgProdects: product.imgProdect,
    };

    addToWishlist(productForWishlist);
  };

  if (!product) return null;

  return (
    <div className="sm:px-10 px-1 py-5">
      <div className="py-7 flex">
        <Link to="/Account" className="text-gray-600">
          {t("Account")}
        </Link>
        <span className="text-gray-600 px-2">/</span>
        <p>{t(product.title)}</p>
      </div>

      <div className="flex justify-center flex-wrap xl:flex-nowrap">
        <div className="mx-2">
          {product.imgProdect[selectedColor]?.map((img, index) => (
            <div key={index} className="flex justify-center items-center">
              <div
                onClick={() => setMainImage(img)}
                className={`sm:w-[130px] sm:h-[104px] w-[95px]  h-[90px] mb-2 cursor-pointer rounded flex justify-center items-center p-1 ${mainImage === img ? "shadow bg-gray-200" : "bg-gray-100"}`}
              >
                <img src={img} alt="" className="sm:w-[100px] w-[80px] h-[70px]" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center  xl:min-w-[500px] sm:w-[calc(100%-160px)] w-[calc(100%-115px)]  sm:h-[516px] h-[287px] p-2 rounded bg-gray-100">
          <img src={mainImage} alt={t(product.title)} className="sm:w-[230px]  sm:h-[220px]" />
        </div>

        <div className="px-4 w-full">
          <h1 className="text-2xl font-bold">{t(product.title)}</h1>
          <div className="flex gap-2 py-2 ">
            <StarRating rating={product.rating} />
            <p>|</p>
            <p className="text-green-400">{t("In Stock")}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-2xl font-bold">{product.priceAfter}</p>
            <p>
              <del>{product.priceBefore}</del>
            </p>
          </div>
          <p className="my-4 text-[14px]">{t("PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.")}</p>
          <hr className="my-4 opacity-30" />
          <div className="flex items-center gap-2 my-4">
            <div className="pb-1">
              <p className="text-2xl">{t("Colors")} :</p>
            </div>
            <div className="flex items-center  gap-1">
              {Object.keys(product.imgProdect).map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    setSelectedColor(color);
                    setMainImage(product.imgProdect[color][0]);
                  }}
                  className={`w-5 h-5 rounded-full border-2 ${selectedColor === color ? "border-gray-600" : "border-gray-300"}`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-10">
            <div className="flex items-center text-center border-2 border-[#808080] rounded bordr-black">
              <button
                onClick={decrease}
                className="flex items-center justify-center py-1 pb-2 w-10 text-4xl  rounded-l-[2px] duration-200 ease-in-out hover:bg-main-color hover:text-white cursor-pointer"
              >
                -
              </button>
              <input type="number" min="1" value={quantity} onChange={handleChange} className="w-16 p-[14px] text-center outline-0  border-x-2 border-[#808080] cursor-pointer" />

              <button
                onClick={increase}
                className="flex items-center justify-center py-1 pb-2 text-4xl  w-10 rounded-e-[2px] duration-200 ease-in-out hover:bg-main-color hover:text-white cursor-pointer"
              >
                +
              </button>
            </div>

            <div>
              <button className="bg-main-color py-3 px-10 text-white rounded cursor-pointer" onClick={CheckLogIn}>
                {t("Buy now")}
              </button>
            </div>

            <div>
              <FaRegHeart
                className={`border-[2px] border-[#808080] p-[4px] text-4xl rounded cursor-pointer ${isInWishlist(product.id) ? "bg-black text-white border-black" : "bg-white text-black"}`}
                onClick={() => {
                  if (isInWishlist(product.id)) {
                    removeFromWishlist(product.id);
                    toast.warn(t("Removed from wishlist"));
                  } else {
                    handleAddToWishlist();
                    toast.success(t("Added to wishlist"));
                  }
                }}
              />
            </div>
          </div>
          <div className="border-2 border-[#808080] rounded my-8">
            <div className="flex items-center p-4 gap-8 w-full ">
              <div>
                <TbTruckDelivery className="text-4xl " />
              </div>
              <div>
                <h4 className="text-2xl">{t("Free Delivery")}</h4>
                <p className="underline">{t("Enter your postal code for Delivery Availability")}</p>
              </div>
            </div>
            <hr className=" opacity-60" />
            <div className="flex items-center p-4 gap-8 w-full">
              <div>
                <TbTruckReturn className="text-4xl " />
              </div>
              <div>
                <h4 className="text-2xl">{t("Return Delivery")}</h4>
                <p>
                  {t("Free 30 Days Delivery Returns.")} <span className="underline">{t("Details")} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
