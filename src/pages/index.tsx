import Head from "next/head";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Services from "~/components/Services";

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
        <Services />
      </main>
      <Footer />
    </>
  );
};

export default Home;
