import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Accueil from "./pages/Accueil";
import Barbier from "./pages/Barbier";
import BarABiere from "./pages/BarABiere";
import Montchat from "./pages/Cartes/Montchat";
import Georges from "./pages/Cartes/Georges";
import Canute from "./pages/Cartes/Canute";
import Ninkasi from "./pages/Cartes/Ninkasi";
import Softs from "./pages/Cartes/Softs";
import Boutique from "./pages/Boutique";
import Baume from "./pages/Products/Baume";
import CremeDouche from "./pages/Products/CremeDouche";
import HuileCroissance from "./pages/Products/HuileCroissance";
import CremeNuit from "./pages/Products/CremeNuit";
import CremeRasage from "./pages/Products/CremeRasage";
import KitRasage from "./pages/Products/KitRasage";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/barbier" element={<Barbier />} />
        <Route path="/bar_a_biere" element={<BarABiere />} />
        <Route path="/bar_a_biere/brasserie_montchat" element={<Montchat />} />
        <Route path="/bar_a_biere/brasserie_georges" element={<Georges />} />
        <Route path="/bar_a_biere/la_canute" element={<Canute />} />
        <Route path="/bar_a_biere/ninkasi" element={<Ninkasi />} />
        <Route path="/bar_a_biere/softs" element={<Softs />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/boutique/baume_2_en_1" element={<Baume />} />
        <Route path="/boutique/creme_de_douche" element={<CremeDouche />} />
        <Route path="/boutique/huile_de_croissance" element={<HuileCroissance />} />
        <Route path="/boutique/creme_de_nuit" element={<CremeNuit />} />
        <Route path="/boutique/creme_de_rasage" element={<CremeRasage />} />
        <Route path="/boutique/kit_de_rasage" element={<KitRasage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;