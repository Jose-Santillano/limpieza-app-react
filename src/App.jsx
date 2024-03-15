import { BrowserRouter, Route, Routes } from "react-router-dom";

//Views
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Inventory from "./views/Inventory";
import BuyHistory from "./views/BuyHistory";
import BuyReports from "./views/BuyReports";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/buy-history" element={<BuyHistory />} />
          <Route path="/buy-reports" element={<BuyReports />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
