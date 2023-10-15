import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

const SERVICES = [
  {
    icon: "material-symbols:headset-mic-rounded",
    title: "Awesome Support",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    icon: "material-symbols:rule-settings-rounded",
    title: "Solutions Business",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    icon: "material-symbols:monitor-heart-rounded",
    title: "Digital Design",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    icon: "material-symbols:trophy-rounded",
    title: "Goal Business",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    icon: "material-symbols:lightbulb-rounded",
    title: "Branding Identity",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
  {
    icon: "material-symbols:query-stats-rounded",
    title: "Dynamic Growth",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam praesentium tenetur suscipit! Suscipit, tempora?",
    url: "/",
  },
];

const Services = () => {
  return (
    <section className="mt-32 flex flex-col items-center">
      <Typography variant="h3" className="mb-3">
        Our <span className="text-primary">Services</span>
      </Typography>
      <Typography variant="paragraph" className="mb-16 text-center lg:w-1/2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
        deserunt maxime voluptas cupiditate laudantium ullam.
      </Typography>
      <div className="flex flex-wrap justify-center gap-10">
        {SERVICES.map(({ icon, title, subtitle, url }) => (
          <Card
            key={title}
            shadow={false}
            className="w-80 bg-accent/5 text-text lg:w-96">
            <CardBody>
              <div className="mb-5 w-fit rounded-xl bg-primary/5 p-5">
                <Icon
                  icon={icon}
                  className="text-4xl text-primary lg:text-5xl"
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
        ))}
      </div>
    </section>
  );
};

export default Services;
