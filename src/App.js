import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Layout from "./components/Layout";
import { useNavigate } from "react-router-dom";

function App({ children }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem("firstLogin")) return;
    localStorage.setItem("firstLogin", true);
    navigate("/landing");
  });
  return (
    //defines the layout of the application. reusable on every page. in our case, it defines the layout of the nav bar
    <Layout>
      {children}
      {/* Toast message provides simple feedback about an operation in a small popup */}
      <ToastContainer />
    </Layout>
  );
}

export default App;
