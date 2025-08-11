import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Services from "./Services.jsx";
import FAQ from "../components/FAQ.jsx";

function HomePage() {
    return (
        <>
            <NavBar />
            <Hero/>
            <Services/>
            <FAQ/>
        </>
    )
}

export default HomePage;