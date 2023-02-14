import { Route, Routes } from "react-router-dom";
import DragNDrop from "../pages/DragNDrop";
import FadeIn from "../pages/FadeIn/FadeIn";
import ImageUpload from "../pages/ImageUpload";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/imageupload" element={<ImageUpload />}></Route>
      </Routes>
      <Routes>
        <Route path="/dragndrop" element={<DragNDrop />}></Route>
      </Routes>
      <Routes>
        <Route path="/fadein" element={<FadeIn />}></Route>
      </Routes>
    </>
  );
}
