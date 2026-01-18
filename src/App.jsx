import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Main pages
import Home from "./pages/Home";
import Casinos from "./pages/Casinos";
import Bonuses from "./pages/Bonuses";

// Casino reviews
import SGCasinoReview from "./pages/Reviews/SGCasinoReview";
import BetmatchReview from "./pages/Reviews/BetmatchReview";
import WildzNewReview from "./pages/Reviews/WildzNewReview";
import KingmakerReview from "./pages/Reviews/Kingmaker";
import BoomerangBetReview from "./pages/Reviews/BoomerangBet";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/casinos" element={<Casinos />} />
        <Route path="/bonuses" element={<Bonuses />} />

        {/* Casino review pages */}
        <Route path="/casinos/sg-casino" element={<SGCasinoReview />} />
        <Route path="/casinos/betmatch" element={<BetmatchReview />} />
        <Route path="/casinos/wildz-new" element={<WildzNewReview />} />

        {/* NEW review */}
        <Route path="/casinos/kingmaker" element={<KingmakerReview />} />
        <Route path="/casinos/boomerangbet" element={<BoomerangBetReview />} />
      </Routes>
    </Layout>
  );
}

export default App;