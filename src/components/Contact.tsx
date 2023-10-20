import { Icon } from "@iconify/react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { ADDRESS } from "~/constants";

const Contact = () => {
  return (
    <section className="mt-32 flex flex-col items-center">
      <Typography variant="h3" className="mb-3">
        Get In <span className="text-primary">Touch</span>
      </Typography>
      <Typography variant="paragraph" className="mb-16 text-center lg:w-1/2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
        deserunt maxime voluptas cupiditate laudantium ullam.
      </Typography>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="space-y-5 lg:w-2/3">
          <div>
            <Typography variant="h4" className="mb-3">
              Contact Info
            </Typography>
            <Typography variant="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              voluptatem blanditiis laboriosam labore deserunt reprehenderit.
            </Typography>
          </div>
          <Typography variant="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
            ratione.
          </Typography>
          <div className="flex flex-col gap-5 md:flex-row lg:gap-1">
            {ADDRESS.map(({ title, subtitle }) => (
              <div key={title}>
                <Typography variant="h6" className="mb-3">
                  {title}
                </Typography>
                <Typography variant="paragraph">{subtitle}</Typography>
              </div>
            ))}
          </div>
        </div>
        <form className="space-y-5 lg:w-full">
          <div className="flex flex-col gap-5 lg:flex-row">
            <Input
              type="text"
              size="lg"
              color="deep-orange"
              label="Name"
              crossOrigin={undefined}
            />
            <Input
              type="email"
              size="lg"
              color="deep-orange"
              label="Email address"
              crossOrigin={undefined}
            />
          </div>
          <Input
            type="text"
            size="lg"
            color="deep-orange"
            label="Subject"
            crossOrigin={undefined}
          />
          <Textarea size="lg" color="deep-orange" label="Message" rows={6} />
          <Button
            variant="gradient"
            color="deep-orange"
            className="flex w-fit items-center gap-2">
            Send Message
            <Icon
              icon="material-symbols:send-rounded"
              className="mb-1 text-lg"
            />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
