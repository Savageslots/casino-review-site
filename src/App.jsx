import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Casinos from "./pages/Casinos";
import Bonuses from "./pages/Bonuses";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casinos" element={<Casinos />} />
        <Route path="/bonuses" element={<Bonuses />} />
      </Routes>
    </Layout>
  );
}

export default App;