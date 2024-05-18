import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageMenu from "./pages/ManageMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ManageMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
