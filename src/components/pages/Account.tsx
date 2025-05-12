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
        <div className="flex ">
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
          <div>
            <form className="shadow">
              <div className="flex gap-3">
                <div>
                  <label className="block">First Name</label>
                  <input type="text" className="bg-[#f5f5f5]" />
                </div>
                <div>
                  <label className="block  ">Last Name</label>
                  <input type="text" className="bg-[#f5f5f5]" />
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <label className="block">Email</label>
                  <input type="email" className="bg-[#f5f5f5]" />
                </div>
                <div>
                  <label className="block">Address</label>
                  <input type="text" className="bg-[#f5f5f5]" />
                </div>
              </div>
              <div className="flex flex-col gap-3  ">
                <div>
                  <label className="block">Current Passwod</label>
                  <input type="email" className="bg-[#f5f5f5]" placeholder="Current Passwod" />
                </div>
                <div>
                  <label className="block">New Passwod</label>
                  <input type="email" className="bg-[#f5f5f5]" placeholder="New Passwod" />
                </div>
                <div>
                  <label className="block">Confirm New Passwod</label>
                  <input type="email" className="bg-[#f5f5f5]" placeholder="Current Passwod" />
                </div>
              </div>
              <div className="flex gap-4">
                <button>Cancel</button>
                <button>Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
