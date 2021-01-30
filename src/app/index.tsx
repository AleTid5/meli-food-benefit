import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import { ProvinceFilterProvider } from "./contexts/ProvinceFilterContext";

function App() {
  return (
    <ProvinceFilterProvider>
      <Navbar />
      <MainContent />
    </ProvinceFilterProvider>
  );
}

export default App;
