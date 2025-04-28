import { useTranslation } from "react-i18next";
import StarRating from "../ui/StarRating";


export default function ProductsFlashSales() {
  const { t } = useTranslation();
  const FlashSales = [
    {
      id: 1,
      title: t("HAVIT HV-G92 Gamepad"),
      imgProdect: "/images/PlayStation_arm.png",
      priceAfter: "$120",
      priceBefore: "$160",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 88,
    },
    {
      id: 2,
      title: t("AK-900 Wired Keyboard"),
      imgProdect: "/images/keyboard.png",
      priceAfter: "$960",
      priceBefore: "$1160",
      PriceReduction: "- 35%",
      rating: 4,
      Quantity: 75,
    },
    {
      id: 3,
      title: t("IPS LCD Gaming Monitor"),
      imgProdect: "/images/g27cq4-500x500 1.png",
      priceAfter: "$375",
      priceBefore: "$400",
      PriceReduction: "- 30%",
      rating: 3,
      Quantity: 99,
    },
    {
      id: 4,
      title: t("IPS LCD Gaming Monitor"),
      imgProdect: "/images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
      priceAfter: "$375",
      priceBefore: "$400",
      PriceReduction: "- 25%",
      rating: 4.5,
      Quantity: 99,
    },
    {
      id: 5,
      title: t("HAVIT HV-G92 Gamepad"),
      imgProdect: "/images/PlayStation_arm.png",
      priceAfter: "$120",
      priceBefore: "$160",
      PriceReduction: "- 40%",
      rating: 5,
      Quantity: 88,
    },
    {
      id: 6,
      title: t("AK-900 Wired Keyboard"),
      imgProdect: "/images/keyboard.png",
      priceAfter: "$960",
      priceBefore: "$1160",
      PriceReduction: "- 35%",
      rating: 4,
      Quantity: 75,
    },
  ];


  return (
    <>
      <div className="flex justify-center gap-8 overflow-hidden ">
        {FlashSales.map((prodect) => (
          <div key={prodect.id}>
            <div className="w-[270px] h-[350px]">
              <div className="flex justify-center items-center w-[100%] h-[250px] relative bg-[#F5F5F5] rounded">
                <img className="w-[172px] h-[152px]" src={prodect.imgProdect} alt="" />
                <div>
                  <p className=" absolute top-2 left-3 bg-[#DB4444] px-4 py-2 rounded-md text-[12px] text-white">{prodect.PriceReduction}</p>
                </div>
              </div>
              <div>
                <h3 className="px-2">{prodect.title}</h3>
                <div>
                  <span className="text-[#DB4444] px-2">{prodect.priceAfter}</span>
                  <span className="text-[#808080] px-2">
                    <del>{prodect.priceBefore}</del>
                  </span>
                </div>
                <div className="flex gap-3 px-2">
                  <StarRating rating={prodect.rating} />
                  <span className="text-[#808080] ">{`(${prodect.Quantity})`}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
