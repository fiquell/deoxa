import Head from "next/head";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Deoxa - Landing Page Template</title>
        <meta name="description" content="Landing Page Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="container">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Home;
