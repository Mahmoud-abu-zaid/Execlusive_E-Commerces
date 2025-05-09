import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "./components/layout/PageLayout";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import SignUp from "./components/pages/auth/SignUp";
import SignIn from "./components/pages/auth/SignIn";
import Cart from "./components/pages/Cart";
import Account from "./components/pages/Account";
import Orders from "./components/pages/Orders";
import { ShopProvider } from "./components/Context/context";
import Wishlist from "./components/pages/WishList";
import CheckOut from "./components/pages/CheckOut";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <>
      <ShopProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PageLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/Cancellations" element={<Home />} />
              <Route path="/Reviews" element={<Home />} />
              <Route path="/Wishlist" element={<Wishlist />} />
              <Route path="/Shop" element={<Home />} />
              <Route path="/Policy" element={<Home />} />
              <Route path="/Shop" element={<Home />} />
              <Route path="/Contect" element={<Contact />} />
              <Route path="/Terms" element={<Home />} />
              <Route path="/Faq" element={<Home />} />
              <Route path="/ForgetPassword" element={<SignIn />} />
              <Route path="/CheckOut" element={<CheckOut />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    </>
  );
}

export default App;
