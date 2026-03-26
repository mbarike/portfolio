import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
    return(
        <div className="main">
            <Hero/>
            <Projects/>
            <Contact/>
        </div>
    );
}
export default Home;