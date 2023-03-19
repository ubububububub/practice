import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const queryClient = new QueryClient();

root.render(
  // <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  // {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  // </QueryClientProvider>
);
