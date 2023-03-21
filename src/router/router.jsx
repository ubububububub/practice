import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HookForm from "../pages/HookForm";
import Home from "../pages/Home";
import Form from "../pages/Form";
import RefForm from "../pages/RefForm";
import SubHome from "../pages/SubHome";
import ErrorBoundary from "../components/common/ErrorBoundary";
import Graph from "../pages/Graph";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/subhome"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ErrorBoundary>
                <SubHome />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route path="/form" element={<Form />} />
        <Route path="/refform" element={<RefForm />} />
        <Route path="/hookform" element={<HookForm />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </>
  );
}
