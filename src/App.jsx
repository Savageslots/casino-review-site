import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Casinos from "./pages/Casinos";
import Bonuses from "./pages/Bonuses";

import CasinoReview from "./pages/Reviews/CasinoReview";
import { casinos } from "./data/casinosData";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* MAIN */}
        <Route index element={<Home />} />
        <Route path="casinos" element={<Casinos />} />
        <Route path="bonuses" element={<Bonuses />} />

        {casinos.map(casino => <Route key={casino.slug} path={casino.reviewLink} element={<CasinoReview casino={casino} />} />)}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;