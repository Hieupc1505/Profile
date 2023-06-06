import Header from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import { themePort } from "./theme.Portfolio";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const Portfolio = () => {
    return (
        <ThemeProvider theme={themePort}>
            <Header />
            <Intro />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </ThemeProvider>
    );
};

export default Portfolio;
