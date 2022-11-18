import GlobalStyle from "./theme/globalStyles";
import ProjectContext from "./constants/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const [user, setUser] = useState({ name: "", email: "", wallet: [] });

  return (
    <ProjectContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/main" element={<MainPage />}/>
          
        </Routes>
      </BrowserRouter>
    </ProjectContext.Provider>
  );
}

export default App;
