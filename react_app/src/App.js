import React, { useState } from "react";
import Sideicon from "./Sideicon";
import Sidetxt from "./Sidetxt";
import Main from "./Main";
import SignIn from "./SignIn";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    

    <div className="App font-sans text-center">
      <Sideicon onMenuItemClick={setCurrentPage} />
      <Sidetxt onMenuItemClick={setCurrentPage} />
      <Main currentPage={currentPage} />
    </div>
  );
}
