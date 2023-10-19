import { Typography } from "@material-tailwind/react";
import { VISION_MISSION } from "~/constants";

const About = () => {
  return (
    <section className="mt-32 flex flex-col items-center">
      <Typography variant="h3" className="mb-3">
        About <span className="text-primary">Us</span>
      </Typography>
      <Typography variant="paragraph" className="mb-16 text-center lg:w-1/2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
        deserunt maxime voluptas cupiditate laudantium ullam.
      </Typography>
      <div className="flex flex-col gap-5 md:flex-row lg:gap-20 lg:px-20">
        <div className="lg:w-3/4">
          <Typography variant="h2" className="leading-relaxed">
            Passionate About Creating Templates For Setup
          </Typography>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          {VISION_MISSION.map(({ title, subtitle }) => (
            <div key={title} className="lg:w-1/2">
              <Typography variant="h5" className="mb-3">
                {title}
              </Typography>
              <Typography variant="paragraph">{subtitle}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
