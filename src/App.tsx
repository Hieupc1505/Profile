import Home from "~pages/Home";
import Authentication from "~pages/authentication";
import Database from "~pages//Database";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "~/theme";
import Besnik from "~/pages/Besnik";
import Profile from "./pages/Profile";
import Portfolio from "~/pages/Portfolio";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />}>
                        <Route
                            path="authentication"
                            element={<Authentication />}
                        />
                        <Route path="storage" element={<Authentication />} />
                        <Route path="hosting" element={<Authentication />} />
                        <Route path="function" element={<Authentication />} />
                        <Route path="database" element={<Database />} />
                        <Route
                            path="machine-learning"
                            element={<Authentication />}
                        />
                    </Route>
                    <Route
                        path="/"
                        element={<Navigate to={"/pages/portfolio"} replace />}
                    />
                    <Route path="/pages/besnik" element={<Besnik />} />
                    <Route path="/pages/profile" element={<Profile />} />
                    <Route path="/pages/portfolio" element={<Portfolio />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
