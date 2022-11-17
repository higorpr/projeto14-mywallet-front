import GlobalStyle from "./theme/globalStyles";
import ProjectContext from "./constants/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegistrationPAge from "./pages/RegistrationPage";

function App() {
  return (
    <ProjectContext.Provider value={{}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPAge />} />
        </Routes>
      </BrowserRouter>
    </ProjectContext.Provider>
  );
}

export default App;
