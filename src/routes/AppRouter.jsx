import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Home from "../pages/Home";
import ScrollToTop from "../components/ScrollToTop";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import BreastCancer from "../pages/breastcancer/BreastCancer";
import BreastCancerStages from "../pages/breastcancer/BreastCancerStages";
import BreastCancerRisk from "../pages/breastcancer/BreastCancerRisk";
import BreastLumps from "../pages/diagnosis/BreastLumps";
import BreastShapeChanges from "../pages/diagnosis/BreastShapeChanges";
import BreastPain from "../pages/diagnosis/BreastPain";
import BreastBiopsy from "../pages/diagnosis/BreastBiopsy";
import GeneralConditions from "../pages/conditions/GeneralConditions";
import Laparoscopic from "../pages/treatments/Laproscopic";
import GallBladderSurgery from "../pages/treatments/GallBladderSurgery";
import OpenMeshRepair from "../pages/treatments/OpenMeshRepair";

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/breast-cancer/what-is-breast-cancer" element={<BreastCancer />} />
          <Route path="/breast-cancer/breast-cancer-stages" element={<BreastCancerStages />} />
          <Route path="/breast-cancer/am-i-at-risk-of-breast-cancer" element={<BreastCancerRisk />} />


          <Route path="/diagnosis/breast-lumps" element={<BreastLumps />} />
          <Route path="/diagnosis/breast-shape-changes" element={<BreastShapeChanges />} />
          <Route path="/diagnosis/breast-pain" element={<BreastPain />} />
          <Route path="/diagnosis/breast-biopsy" element={<BreastBiopsy />} />


          <Route path="/general-surgery/conditions/:condition" element={<GeneralConditions />} />
          <Route path="/general-surgery/treatments/laparoscopic-mesh-repair-of-inguinal-/-femoral-hernia" element={<Laparoscopic />} />
          <Route path="/general-surgery/treatments/laparoscopic-gall-bladder-surgery" element={<GallBladderSurgery />} />
          <Route path="/general-surgery/treatments/open-mesh-repair-of-umbilical-and-para-umbilical-hernia" element={<OpenMeshRepair />} />

        </Route>

      </Routes>
    </Router>
  );
}
