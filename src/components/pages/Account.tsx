import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Account() {
  const { t } = useTranslation();

  return (
    <>
      <div className="px-10">
        <div className="flex justify-between items-center ">
          <div className="py-4">
            <Link to="/" className="text-gray-600">
              {t("Home")}
            </Link>
            <span className="text-gray-600 px-2">/</span>

            <Link to="/Account" className="text-black">
              {t("My Account")}
            </Link>
          </div>
          <div>
            <h3>
              Welcome! <span className="text-main-color">Mahmoud Abu Zaid</span>
            </h3>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h3>Manage My Account</h3>
            <div className="px-5 flex flex-col">
              <Link to="/Account">My Profile</Link>
              <Link to="/Account">Address Book</Link>
              <Link to="/Account">My Payment Options</Link>
            </div>
            <h3>My Orders</h3>
            <div className="px-5 flex flex-col">
              <Link to="/">My Returns</Link>
              <Link to="/">My Cancellations</Link>
            </div>
            <h3>My WishList</h3>
          </div>
          <div className="w-[80%]">
            <form className="shadow p-3 py-4 mb-5">
              <div className="flex  gap-3">
                <div className="w-full">
                  <label className="block mx-3">First Name</label>
                  <input type="text" minLength={1} className="bg-[#f5f5f5]  w-[95%] m-3  p-2 rounded" />
                </div>
                <div className="w-full">
                  <label className="block mx-3   ">Last Name</label>
                  <input type="text" minLength={1} className="bg-[#f5f5f5]  w-[95%] m-3 p-2 rounded" />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-full">
                  <label className="block mx-3 ">Email</label>
                  <input type="email" className="bg-[#f5f5f5] w-[95%] m-3 p-2 rounded " />
                </div>
                <div className="w-full">
                  <label className="block mx-3 ">Address</label>
                  <input type="text" className="bg-[#f5f5f5] w-[95%] m-3 p-2 rounded " />
                </div>
              </div>
              <div className="flex flex-col gap-2  ">
                <div>
                  <label className="block mx-3">Password Changes</label>
                  <input type="email" className="bg-[#f5f5f5] w-[97%] m-3 p-2 rounded" minLength={8} placeholder="Current Passwod" />
                  <input type="email" className="bg-[#f5f5f5] w-[97%] m-3 p-2 rounded" minLength={8} placeholder="New Passwod" />
                  <input type="email" className="bg-[#f5f5f5] w-[97%] m-3 p-2 rounded" minLength={8} placeholder="Confirm New Password" />
                </div>
              </div>
              <div className="flex justify-end gap-6 mx-6 my-2">
                <button>Cancel</button>
                <button className="px-5 py-2 bg-main-color rounded text-white">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
