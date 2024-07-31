import Header from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import { themePort } from "./theme.Portfolio";
import Intro from "./components/Intro";
import About from "./components/About/team";
import Projects from "./components/Projects/team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header2 from "./components/header2";
import "normalize.css";
import Services from "./components/Services";

const Portfolio = () => {
    return (
        <ThemeProvider theme={themePort}>
            <Header2 />
            <Intro />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </ThemeProvider>
    );
};

export default Portfolio;
