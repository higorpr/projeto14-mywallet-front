import GlobalStyle from "./theme/globalStyles";
import ProjectContext from "./constants/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import MainPage from "./pages/MainPage/MainPage";
import EntryPage from "./pages/EntryPage/EntryPage";

function App() {
    // const [user, setUser] = useState({ name: "Higor", email: "higorpr@gmail.com", wallet: [{"Salário":8000},{"Mudança":-5000}] });
    const [user, setUser] = useState({ name: "", token:"" , wallet: [] });

    const [operation, setOperation] = useState("in");

    return (
        <ProjectContext.Provider
            value={{ user, setUser, operation, setOperation }}
        >
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route
                        path="/registration"
                        element={<RegistrationPage />}
                    />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/entry" element={<EntryPage />} />
                </Routes>
            </BrowserRouter>
        </ProjectContext.Provider>
    );
}

export default App;
