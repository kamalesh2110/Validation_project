import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Email from "./component/Email";
import Home from "./component/Home";
import Phone from "./component/Phone";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/email" element={<Email></Email>}></Route>
          <Route path="/phone" element={<Phone />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
