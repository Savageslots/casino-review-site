import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Casinos from "./pages/Casinos";
import Bonuses from "./pages/Bonuses";

// Reviews
import SGCasinoReview from "./pages/Reviews/SGCasinoReview";
import BetmatchReview from "./pages/Reviews/BetmatchReview";
import WildzNewReview from "./pages/Reviews/WildzNewReview";
import KingmakerReview from "./pages/Reviews/Kingmaker";
import BoomerangBetReview from "./pages/Reviews/BoomerangBet";
import RoyalSeaReview from "./pages/Reviews/RoyalSea";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* MAIN */}
        <Route index element={<Home />} />
        <Route path="casinos" element={<Casinos />} />
        <Route path="bonuses" element={<Bonuses />} />

        {/* REVIEWS */}
        <Route path="casinos/sg-casino" element={<SGCasinoReview />} />
        <Route path="casinos/betmatch" element={<BetmatchReview />} />
        <Route path="casinos/wildz-new" element={<WildzNewReview />} />
        <Route path="casinos/kingmaker" element={<KingmakerReview />} />
        <Route path="casinos/boomerangbet" element={<BoomerangBetReview />} />
        <Route path="casinos/royalsea" element={<RoyalSeaReview />} />
      </Route>
    </Routes>
  );
}

export default App;