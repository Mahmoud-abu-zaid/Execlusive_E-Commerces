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

function App() {
  return (
    <>
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
            <Route path="Orders" element={<Orders/>} />
            <Route path="/Cancellations" element={<Home/>} />
            <Route path="/Reviews" element={<Home/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
