import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddPet from "./components/AddPet";
import ViewPets from "./components/ViewPets";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/view-pets" element={<ViewPets />} />
      </Routes>
    </>
  );
}

export default App;