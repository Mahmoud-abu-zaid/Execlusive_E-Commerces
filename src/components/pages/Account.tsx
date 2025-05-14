import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { useUser } from "../Context/context";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  emailOrPhoneNumber?: string;
  password?: string;
  address: string;
  CurrentPassword: string;
  NewPassword: string;
  ConfirmNewPassword: string;
}

export default function Account() {
  const { t } = useTranslation();
  const { user, setUser } = useUser();

  const [inputForm, setInputForm] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    emailOrPhoneNumber: "",
    address: "",
    CurrentPassword: "",
    NewPassword: "",
    ConfirmNewPassword: "",
  });

  useEffect(() => {
    const storedUser = user || JSON.parse(localStorage.getItem("user") || "null");

    if (storedUser) {
      setInputForm((prev) => ({
        ...prev,
        id: storedUser.id || "",
        firstName: storedUser.firstName || "",
        lastName: storedUser.lastName || "",
        emailOrPhoneNumber: storedUser?.emailOrPhoneNumber || "",
        address: storedUser.address || "",
      }));
    }
  }, [user]);

  function accountData() {
    if (inputForm.NewPassword !== inputForm.ConfirmNewPassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (user?.password && inputForm.CurrentPassword !== user.password) {
      toast.error("Current password is incorrect");
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem("Data For User") || "[]");

    if (!user) {
      return;
    }

    const updatedUser = {
      ...user,
      firstName: inputForm.firstName,
      lastName: inputForm.lastName,
      emailOrPhoneNumber: inputForm.emailOrPhoneNumber,
      address: inputForm.address,
      password: inputForm.NewPassword ? inputForm.NewPassword : user.password,
    };

    const updatedUsers = allUsers.map((u: User) => (u.id === user?.id ? updatedUser : u));

    localStorage.setItem("Data For User", JSON.stringify(updatedUsers));

    setUser(updatedUser);

    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast.success("Data saved successfully");

    setInputForm((prev) => ({
      ...prev,
      CurrentPassword: "",
      NewPassword: "",
      ConfirmNewPassword: "",
    }));
  }

  function handleCancel() {
    const storedUser = user || JSON.parse(localStorage.getItem("user") || "null");

    if (storedUser) {
      setInputForm((prev) => ({
        ...prev,
        id: storedUser.id || "",
        firstName: storedUser.firstName || "",
        lastName: storedUser.lastName || "",
        emailOrPhoneNumber: storedUser.emailOrPhoneNumber || "",
        address: storedUser.address || "",
        CurrentPassword: "",
        NewPassword: "",
        ConfirmNewPassword: "",
      }));
      toast.success("Cancel to update");
    }
  }

  const storedUser = JSON.parse(localStorage.getItem("user") || "null");
  return (
    <>
      <div className="px-10">
        <div className="flex justify-between flex-wrap  gap-2 items-center py-4">
          <div className="py-4">
            <Link to="/" className="text-gray-600">
              {t("Home")}
            </Link>
            <span className="text-gray-600 px-2">/</span>

            <Link to="/Account" className="text-black">
              {t("My Account")}
            </Link>
          </div>

          <div className="">
            <h3>
              Welcome!{" "}
              <span className="text-main-color">
                {storedUser.firstName} {storedUser.lastName}{" "}
              </span>
            </h3>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="hidden sm:flex flex-col gap-4">
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
          <div className="w-full sm:w-[80%]">
            <form
              onSubmit={(e) => {
                accountData();
                e.preventDefault();
              }}
              className="shadow p-3 py-4 mb-5"
            >
              <div className="m-3 text-xl text-main-color">
                <h2>Edit Your Profile</h2>
              </div>
              <div className="flex sm:flex-nowrap flex-wrap  gap-3">
                <div className="w-full">
                  <label className="block mx-3">First Name</label>
                  <input
                    onChange={(e) => setInputForm({ ...inputForm, firstName: e.target.value })}
                    value={inputForm.firstName}
                    type="text"
                    minLength={1}
                    className="bg-[#f5f5f5]  w-[95%] m-3  p-2 rounded"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block mx-3">Last Name</label>
                  <input
                    value={inputForm.lastName}
                    onChange={(e) => setInputForm({ ...inputForm, lastName: e.target.value })}
                    type="text"
                    minLength={1}
                    className="bg-[#f5f5f5]  w-[95%] m-3 p-2 rounded"
                    required
                  />
                </div>
              </div>
              <div className="flex sm:flex-nowrap flex-wrap gap-3">
                <div className="w-full">
                  <label className="block mx-3 ">Email</label>
                  <input
                    type="email"
                    value={inputForm.emailOrPhoneNumber}
                    onChange={(e) => setInputForm({ ...inputForm, emailOrPhoneNumber: e.target.value })}
                    className="bg-[#f5f5f5] w-[95%] m-3 p-2 rounded"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block mx-3 ">Address</label>
                  <input value={inputForm.address} onChange={(e) => setInputForm({ ...inputForm, address: e.target.value })} type="text" className="bg-[#f5f5f5] w-[95%] m-3 p-2 rounded " required />
                </div>
              </div>
              <div className="flex flex-col gap-2  ">
                <div>
                  <label className="block mx-3">Password Changes</label>
                  <input
                    type="password"
                    value={inputForm.CurrentPassword}
                    onChange={(e) => setInputForm({ ...inputForm, CurrentPassword: e.target.value })}
                    className="bg-[#f5f5f5] w-[97%] m-3 p-2 rounded"
                    minLength={8}
                    placeholder="Current Passwod"
                  />
                  <input
                    type="password"
                    value={inputForm.NewPassword}
                    onChange={(e) => setInputForm({ ...inputForm, NewPassword: e.target.value })}
                    className="bg-[#f5f5f5] w-[97%] m-3 p-2 rounded"
                    minLength={8}
                    placeholder="New Passwod"
                  />
                  <input
                    type="password"
                    value={inputForm.ConfirmNewPassword}
                    onChange={(e) => setInputForm({ ...inputForm, ConfirmNewPassword: e.target.value })}
                    className="bg-[#f5f5f5] w-[97%] m-3 p-2 rounded"
                    minLength={8}
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-6 mx-6 my-2">
                <button onClick={handleCancel}>Cancel</button>
                <button className="px-5 py-2 bg-main-color rounded text-white" type="submit">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
