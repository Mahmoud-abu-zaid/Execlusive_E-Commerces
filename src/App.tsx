import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "./components/layout/PageLayout";

import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Apout" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
