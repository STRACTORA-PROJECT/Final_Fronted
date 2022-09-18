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

export default function Home({images,test}) {
  console.log(images);
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
        <Projects data={images}  />
        <Testimonials data={images}  testimonials={test}/>
        <DreamHouse />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const results = await fetch(`https://api.cloudinary.com/v1_1/stractora/resources/image`, {
    headers: {
      Authorization: `Basic ${Buffer.from('729121727847811' + ':' + 'Ybn4PxCstPsegBzBw1fo9U5Arlo').toString('base64')}`
    }
  }).then(r => r.json())
  console.log(results);
  const { resources } = results
  const images = resources.map(resource => {
    
      return {
         image: resource.secure_url,
         folder:resource.folder
       }
    }
 

  )
  const test= await   fetch('https://stractora.herokuapp.com/testimonial')
  .then(response => response.json())

  return {
    props: {
      images,
      test
    }
  }
}
