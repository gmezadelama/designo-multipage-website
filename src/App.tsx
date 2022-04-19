import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import AboutUs from "./pages/AboutUs";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import { DesignoRoutes } from "./utils/constants";
import ScrollToTop from "./pages/wrapper/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route path={DesignoRoutes.Home} element={<Home />} />
          <Route path={DesignoRoutes.WebDesign} element={<WebDesign />} />
          <Route path={DesignoRoutes.AppDesign} element={<AppDesign />} />
          <Route
            path={DesignoRoutes.GraphicDesign}
            element={<GraphicDesign />}
          />
          <Route path={DesignoRoutes.AboutUs} element={<AboutUs />} />
          <Route path={DesignoRoutes.Locations} element={<Locations />} />
          <Route path={DesignoRoutes.Contact} element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
