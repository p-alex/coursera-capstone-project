import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ReserveTable from "./pages/ReserveTable";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<ReserveTable />} />
      </Route>
    </Routes>
  );
}

export default App;
