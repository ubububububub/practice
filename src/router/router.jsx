import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HookForm from "../pages/HookForm";
import Home from "../pages/Home";
import Form from "../pages/Form";
import RefForm from "../pages/RefForm";

export default function Router() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/refform" element={<RefForm />} />
          <Route path="/hookform" element={<HookForm />} />
        </Routes>
      </Suspense>
    </>
  );
}
