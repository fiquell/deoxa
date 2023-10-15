import { Icon } from "@iconify/react";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { CONTACTS, ICONS, LINKS } from "~/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32">
      <div className="container flex flex-col gap-10 lg:flex-row lg:gap-32">
        <div className="lg:w-1/2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={200}
            className="mb-10"
          />
          <Typography variant="paragraph" className="mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            voluptatem deserunt facilis? Aliquid, neque odio enim recusandae
            eaque laudantium deserunt error voluptas autem maxime sed porro
            praesentium nostrum sapiente veritatis.
          </Typography>
          <Typography variant="paragraph" className="mb-5">
            4806 Spring Haven Trail South Orange, NJ 07079
          </Typography>
          {CONTACTS.map(({ text, icon, url }) => (
            <Link
              key={text}
              href={url}
              className="flex items-center gap-2 py-1 transition duration-300 ease-in-out hover:text-primary">
              <Icon icon={icon} className="mb-1 text-lg" />
              {text}
            </Link>
          ))}
        </div>
        <div className="md:flex md:justify-between lg:w-1/2">
          {LINKS.map(({ title, items }) => (
            <ul key={title} className="mb-5 md:w-1/2">
              <Typography variant="h5" className="mb-3">
                {title}
              </Typography>
              {items.map(({ text, url }) => (
                <li
                  key={text}
                  className="transition duration-300 ease-in-out hover:text-primary">
                  <Link href={url} className="block py-1">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-32 border-t py-2">
        <div className="container flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between">
          <Typography variant="paragraph">
            &copy; {currentYear} Deoxa. All Rights Reserved.
          </Typography>
          <div className="flex items-center gap-1">
            {ICONS.map(({ icon, url }) => (
              <Link key={icon} href={url}>
                <Button variant="text" size="sm">
                  <Icon icon={icon} className="text-xl opacity-80" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
