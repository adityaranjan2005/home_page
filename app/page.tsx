import Navbar from "./navbar";
import MainPage from "./MainPage";
import Footer from "./footer";
import Animation from "./animation";
import BuyBitcoin from "./BuyBitcoin";
import Paytm from "./Paytm";
import SwapSoSuite from "./SwapSoSuite";
import Phone from "./Phone";

export default function Home() {
  return (
    <div>
      {/* <Navbar />
      <MainPage />
      <Animation/>
      <BuyBitcoin />
      <Phone/> */}
      <SwapSoSuite/>
      {/* <Paytm/>
      <Footer /> */}
    </div>
  );
}
