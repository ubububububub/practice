import { Route, Routes } from "react-router-dom";
import DragNDrop from "../pages/DragNDrop";
import FadeIn from "../pages/FadeIn/FadeIn";
import Home from "../pages/Home";
import HomeDetail from "../pages/HomeDetail";
import ImageUpload from "../pages/ImageUpload";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/:id" element={<HomeDetail />} />
      </Routes>
      <Routes>
        <Route path="/imageupload" element={<ImageUpload />} />
      </Routes>
      <Routes>
        <Route path="/dragndrop" element={<DragNDrop />} />
      </Routes>
      <Routes>
        <Route path="/fadein" element={<FadeIn />} />
      </Routes>
    </>
  );
}
