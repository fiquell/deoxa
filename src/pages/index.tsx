import { Icon } from "@iconify/react";
import { Button, Typography } from "@material-tailwind/react";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Deoxa - Landing Page Template</title>
        <meta name="description" content="Landing Page Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="container">
        <section className="flex min-h-screen flex-col items-center justify-between lg:flex-row lg:gap-20">
          <div className="mt-28 space-y-8 lg:mt-0 lg:w-1/2">
            <Typography variant="h6" className="text-secondary">
              Creative Marketing
            </Typography>
            <Typography variant="h2">
              Get Your Professional Website Done With{" "}
              <span className="text-secondary">Deoxa</span>
            </Typography>
            <Typography variant="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus autem ipsa, quaerat rem repudiandae saepe est maxime
              doloribus provident expedita dignissimos accusamus quidem
              voluptate ab eius, eveniet numquam id corrupti?
            </Typography>
            <Button
              variant="gradient"
              color="deep-orange"
              className="flex items-center gap-3">
              Find Out How
              <Icon
                icon="material-symbols:line-end-arrow-notch-rounded"
                className="mb-1 text-lg"
              />
            </Button>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/images/hero.png"
              alt="Hero images"
              width={800}
              height={600}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
