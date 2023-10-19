import Head from "next/head";
import About from "~/components/About";
import Features from "~/components/Features";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Services from "~/components/Services";
import Contact from "~/components/Contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>Deoxa - Landing Page Template</title>
        <meta name="description" content="Landing Page Template" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=1"
        />
      </Head>
      <main className="container">
        <Hero />
        <About />
        <Services />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
