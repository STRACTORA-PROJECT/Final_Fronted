import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Welcome from "../components/Welcome";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import About from "../components/About";
import DreamHouse from "../components/DreamHouse";
import Testimonials from "../components/Testimonials";

export default function Home(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen2">
      <Head>
        <title>Stractora</title>
        <link rel="icon" href="/images/logo.jpeg" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="description" content="Stractora official website" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Stractora, dream home,home, construction, design, futuristic design, construction company, Rwanda"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="theme-color" content="#DA9802" />
        <noscript>
          <h1>Please enable Javascript in your browser to access this site.</h1>
        </noscript>
      </Head>
      <main className="w-full p-0 flex-1">
        <div id="home-components">
          <Navbar />
          <Welcome />
        </div>
        <About />
        <Services />
        <Achievements />
        <Projects />
        <Testimonials />
        <DreamHouse />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}