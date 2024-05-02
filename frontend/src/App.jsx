import { useState } from "react";
import React from "react";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
    </>
  );
}

export default App;
