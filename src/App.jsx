import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                    <Router>
                        <Routes>
                            <Route path="/" element={<Hero />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/blog" element={<Experience />} />
                        </Routes>
                    </Router>
            )}
        </>
    );
}

export default App;
