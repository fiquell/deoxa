import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { FEATURES } from "~/constants";

const Features = () => {
  return (
    <section className="mt-32 flex flex-col items-center">
      <Typography variant="h3" className="mb-3">
        Our <span className="text-primary">Features</span>
      </Typography>
      <Typography variant="paragraph" className="mb-16 text-center lg:w-1/2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
        deserunt maxime voluptas cupiditate laudantium ullam.
      </Typography>
      <div>
        {FEATURES.map(({ image, icon, title, subtitle, url }, index) => (
          <div
            key={title}
            className={`flex flex-col items-center justify-center md:flex-row ${
              index % 2 === 1 && "md:flex-row-reverse"
            }`}>
            <div className="flex justify-center md:w-1/2">
              <Image src={image} alt={title} width={430} height={430} />
            </div>
            <Card
              color="transparent"
              shadow={false}
              className="text-text md:w-1/2">
              <CardBody>
                <div className="mb-10 w-fit rounded-xl bg-primary/95 p-4">
                  <Icon
                    icon={icon}
                    className="text-3xl text-background lg:text-4xl"
                  />
                </div>
                <Typography variant="h4" className="mb-3">
                  {title}
                </Typography>
                <Typography variant="paragraph">{subtitle}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link href={url}>
                  <Button
                    variant="text"
                    size="sm"
                    color="deep-orange"
                    className="flex items-center gap-2">
                    Learn More
                    <Icon
                      icon="material-symbols:line-end-arrow-notch-rounded"
                      className="mb-1 text-lg"
                    />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
