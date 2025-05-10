import { Link, useParams } from "react-router";
import { useShop } from "../Context/context";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import StarRating from "../ui/StarRating";
import { FaRegHeart } from "react-icons/fa6";
import { toast } from "react-toastify";

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
  orderedQuantity?: number;
  orderedSubtotal?: number;
}

export default function ProductDetails() {
  const { productId } = useParams();
  const { t } = useTranslation();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useShop();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [mainImage, setMainImage] = useState<string>("");

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
    <div className="px-10">
      <div className="py-4 flex">
        <Link to="/Account" className="text-gray-600">
          {t("Account")}
        </Link>
        <span className="text-gray-600 px-2">/</span>
        <p>{t(product.title)}</p>
      </div>

      <div className="flex justify-center">
        <div className="mx-2">
          {product.imgProdect[selectedColor]?.map((img, index) => (
            <div key={index} className="flex justify-center items-center">
              <div
                onClick={() => setMainImage(img)}
                className={`w-[130px] h-[104px] mb-2 cursor-pointer rounded flex justify-center items-center ${mainImage === img ? "shadow bg-gray-200" : "bg-gray-100"}`}
              >
                <img src={img} alt="" className="w-[100px] h-[70px]" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center min-w-[500px] h-[553px] rounded bg-gray-100">
          <img src={mainImage} alt={product.title} className="w-[230px] h-[230px]" />
        </div>

        <div className="px-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="flex gap-2 py-2 ">
            <StarRating rating={product.rating} />
            <p>|</p>
            <p className="text-green-400">In Stock</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-2xl font-bold">{product.priceAfter}</p>
            <p>
              <del>{product.priceBefore}</del>
            </p>
          </div>
          <p className="my-4 text-[14px]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
          <hr className="my-4 opacity-30" />
          <div className="flex items-center gap-2 my-4">
            <p className="text-2xl">Colors :</p>
            {Object.keys(product.imgProdect).map((color) => (
              <button
                key={color}
                onClick={() => {
                  setSelectedColor(color);
                  setMainImage(product.imgProdect[color][0]);
                }}
                className={`w-5 h-5 rounded-full border-2 ${selectedColor === color ? "border-gray-600" : "border-gray-300"}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="flex justify-around items-center gap-10">
            <div></div>
            <div>
              <button className="bg-main-color py-3 px-10 text-white rounded">Buy now</button>
            </div>
            {product && (
              <div>
                <FaRegHeart
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
