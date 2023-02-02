import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import FullPage from "./Components/FullPage/FullPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages */}
        <Route path="/home" element={ <  FullPage/> } />

        {/* Navigate To home */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
