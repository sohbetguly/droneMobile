import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Hardware from "./Hardware";
import HowToBuy from "./HowToBuy";
import Subscriptions from "./Subscriptions";
import FindADealer from "./FindADealer";
import "./Layout.scss";

function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/how-to-buy" element={<HowToBuy />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/hardware" element={<Hardware />} />
      <Route path="/find-a-dealer" element={<FindADealer />} />
      {/* <Route path="/how-it-works" element={<HowItWorks />} /> */}
    </Routes>
  );
}

export default Layout;
