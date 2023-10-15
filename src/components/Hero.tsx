import { Icon } from "@iconify/react";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between gap-20 lg:flex-row">
      <div className="mt-28 space-y-8 lg:mt-0 lg:w-1/2">
        <Typography variant="h6" className="text-secondary">
          Creative Marketing
        </Typography>
        <Typography variant="h2">
          Get Your Professional Website Done With{" "}
          <span className="text-secondary">Deoxa</span>
        </Typography>
        <Typography variant="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          autem ipsa, quaerat rem repudiandae saepe est maxime doloribus
          provident expedita dignissimos accusamus quidem voluptate ab eius,
          eveniet numquam id corrupti?
        </Typography>
        <Link href="/" className="block">
          <Button
            variant="gradient"
            color="deep-orange"
            className="flex items-center gap-2">
            Find Out How
            <Icon
              icon="material-symbols:line-end-arrow-notch-rounded"
              className="mb-1 text-lg"
            />
          </Button>
        </Link>
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
  );
};

export default Hero;
