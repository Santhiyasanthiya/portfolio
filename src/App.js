import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"; // Ensure this is imported
import Navbar from "./components/NavBar/Navbar";
import "./App.css";
import Main from "./pages/Main";
import Aboutme from "./pages/Aboutme";
import Whatido from "./pages/Whatido";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { globalStyles } from "./portfolio";
import Loader from "./components/loaders/Loader";
import ReactGA from "react-ga";
ReactGA.initialize("UA-208216831-1");

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const maincontent = (
    <div>
      <Helmet>
        {/* SEO Meta Tags */}
        <title>Santhiya | Full Stack Developer</title>
        <meta
          name="description"
          content="Hello Everyone, I am Santhiya, a Full Stack Developer working at Zuppa."
        />
        <meta
          name="keywords"
          content="drones, drone seller, advanced drones, Zuppa, drone technology, drone store, buy drones online"
        />
        <meta property="og:title" content="Santhiya | Zuppa Company" />
        <meta property="og:description" content="Web Developer" />
        <meta property="og:image" content="link_to_your_image.jpg" />
        <meta
          property="og:url"
          content="https://santhiya-k-portfolio.vercel.app/#/"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Navbar />
      <Main />
      <Aboutme />
      <Whatido />
      <Projects />
      <Contact />
    </div>
  );

  return <div style={globalStyles}>{loading ? <Loader /> : maincontent}</div>;
}

export default App;
