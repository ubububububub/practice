import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function Router() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}
