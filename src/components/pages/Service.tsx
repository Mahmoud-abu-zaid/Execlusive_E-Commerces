import { useEffect, useState } from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RiCustomerServiceLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

export default function Services() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap py-18 gap-12">
        <div className="flex justify-center items-center flex-col p-2">
          <div className={`"h-[80px] w-[80px]  p-3 flex justify-center items-center rounded-[50px] mb-4 duration-700  ${visible ? "bg-[#ff5959]" : "bg-[#c1c0c1]"}`}>
            <TbTruckDelivery className="text-[40px] text-white bg-black w-[56px] h-[56px] p-2 rounded-[50px] " />
          </div>
          <h3 className="text-[20px] font-bold">FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="flex justify-center items-center flex-col p-2">
          <div className={`"h-[80px] w-[80px]  p-3 flex justify-center items-center rounded-[50px] mb-4 duration-700  ${visible ? "bg-[#ff5959]" : "bg-[#c1c0c1]"}`}>
            <RiCustomerServiceLine className={`text-[40px] text-white bg-black w-[56px] h-[56px] p-2 rounded-[50px]`} />
          </div>
          <h3 className="text-[20px] font-bold">24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex justify-center items-center flex-col p-2">
          <div className={`"h-[80px] w-[80px]  p-3 flex justify-center items-center rounded-[50px] mb-4 duration-700  ${visible ? "bg-[#ff5959]" : "bg-[#c1c0c1]"}`}>
            <IoShieldCheckmarkSharp className="text-[40px] text-white bg-black w-[56px] h-[56px] p-2 rounded-[50px] " />
          </div>
          <h3 className="text-[20px] font-bold">MONEY BACK GUARANTEE</h3>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
    </>
  );
}
