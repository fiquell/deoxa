import { Icon } from "@iconify/react";
import { Button, Typography } from "@material-tailwind/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Hero = () => {
  const LRef = useRef<HTMLDivElement | null>(null);
  const RRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(LRef.current, {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: LRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(RRef.current, {
        x: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: RRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between gap-20 lg:flex-row">
      <div ref={LRef} className="mt-28 space-y-8 lg:mt-0 lg:w-1/2">
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
      <div ref={RRef} className="lg:w-1/2">
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
