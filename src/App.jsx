import TopicGuide from './pages/TopicGuide';
import { guideRoutes } from './data/topicGuides';
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Casinos from "./pages/Casinos";
import Bonuses from "./pages/Bonuses";
import WageringCalculator from "./pages/WageringCalculator";

import CasinoReview from "./pages/Reviews/CasinoReview";
import { casinos } from "./data/casinosData";

import { locales, localePath } from "./i18n/routing";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {locales.flatMap(locale => [
          <Route key={`${locale}-home`} path={localePath('/', locale)} element={<Home />} />,
          <Route key={`${locale}-casinos`} path={localePath('/casinos', locale)} element={<Casinos />} />,
          <Route key={`${locale}-bonuses`} path={localePath('/bonuses', locale)} element={<Bonuses />} />,
          <Route key={`${locale}-calculator`} path={localePath('/calculadora-rollover', locale)} element={<WageringCalculator />} />,
          ...guideRoutes.map(route => <Route key={`${locale}-${route}`} path={localePath(route, locale)} element={<TopicGuide />} />),
          ...casinos.map(casino => <Route key={`${locale}-${casino.slug}`} path={localePath(casino.reviewLink, locale)} element={<CasinoReview casino={casino} />} />)
        ])}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;