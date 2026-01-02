import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Main pages
import Home from "./pages/Home";
import Casinos from "./pages/Casinos";
import Bonuses from "./pages/Bonuses";

// Casino reviews
import WildzReview from "./pages/Reviews/WildzReview";
import BetmatchReview from "./pages/Reviews/BetmatchReview";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/casinos" element={<Casinos />} />
        <Route path="/bonuses" element={<Bonuses />} />

        {/* Casino review pages */}
        <Route path="/casinos/wildz" element={<WildzReview />} />
        <Route path="/casinos/betmatch" element={<BetmatchReview />} />
      </Routes>
    </Layout>
  );
}

export default App;