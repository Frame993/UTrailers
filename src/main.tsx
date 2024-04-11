import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import Details from "./pages/Details.tsx";

interface Props {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  return children;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Wrapper>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:title" element={<Details />} />
      </Routes>
    </Wrapper>
  </Router>
);
