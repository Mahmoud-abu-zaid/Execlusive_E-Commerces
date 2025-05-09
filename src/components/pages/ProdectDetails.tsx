import { Link, useParams } from "react-router";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import StarRating from "../ui/StarRating";

interface Product {
  id: number;
  title: string;
  imgProdect: string[];
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

  const [product, setProduct] = useState<Product | null>(null);

  const [mainImage, setMainImage] = useState<string>("");

  const products: Product[] = [
    {
      id: 1,
      title: t("HAVIT HV-G92 Gamepad"),
      imgProdect: ["/images/PlayStation_arm.png", "/images/PlayStation_arm_2.png", "/images/PlayStation_arm_1.png", "/images/PlayStation_arm_1.png", "/images/PlayStation_arm_1.png"],
      priceAfter: "$120",
      priceBefore: "$160",
      PriceReduction: "-40%",
      rating: 5,
      Quantity: 88,
    },
  ];

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(productId || ""));

    setProduct(foundProduct || null);

    if (foundProduct) setMainImage(foundProduct.imgProdect[0]);
  }, [productId]);
  return (
    <>
      {product && (
        <div className="px-10">
          <div className="py-4 flex">
            <Link to="/Account" className="text-gray-600">
              {t("Account")}
            </Link>
            <span className="text-gray-600 px-2">/</span>
            <p>{t(product.title)}</p>
          </div>
          <div className="flex  justify-center  ">
            <div className=" mx-2">
              {product.imgProdect.map((Img, index) => (
                <div key={index} className="flex  justify-center items-center">
                  <div className={`flex justify-center items-center w-[130px] h-[104px] mb-2 cursor-pointer rounded ${mainImage === Img ? "shadow bg-gray-200 " : "bg-gray-100"}`}>
                    <img src={Img} className={`w-[100px] h-[70px]`} onClick={() => setMainImage(Img)} alt={product.title} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center min-w-[500px] h-[553px] rounded bg-gray-100">
              <img src={mainImage} alt={product.title} className="w-[230px] h-[230px] " />
            </div>
            <div className="px-4">
              <div>
                <h1>{product.title}</h1>
              </div>
              <div className="flex gap-2">
                <StarRating rating={product.rating} />
                <p>|</p>
                <p className="text-green-400">In Stock</p>
              </div>
              <div className="flex gap-2">
                <p>{product.priceAfter}</p>
                <p>
                  <del>{product.priceBefore}</del>
                </p>
              </div>
              <div>
                <p>
                  PlayStation 5 Controller Skin High quality vinyl with air <br />
                  channel adhesive for easy bubble free install & mess <br />
                  free removal Pressure sensitive.
                </p>
                <hr />
                <div className="actions">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
