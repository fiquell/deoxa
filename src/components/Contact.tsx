import React from "react";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
import Link from "next/link";
import { Icon } from "@iconify/react";

type TypeContact = {
    tittle: string,
    subTittle: string
}

export const ContactAdress: TypeContact[] = [
{
    tittle: 'Addres - A',
    subTittle: 'Lorem ipsum dolor sit amet',
},
{
    tittle: 'Address - B',
    subTittle: 'Lorem ipsum dolor sit amet',
}
]

export default function Contact() {
  return (
    <>
    <div className="container">
    <div className="flex flex-col items-center ">
      <Typography variant="h3" className="mb-3">
        Get In<span className="text-primary">Touch</span>
      </Typography>
      <Typography variant="paragraph" className="mb-16 text-center lg:w-1/3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
        deserunt maxime voluptas cupiditate laudantium ullam.
      </Typography>
    </div>
    <div className="flex gap-20">
      <div className="flex flex-col gap-5 w-1/3">
        <Typography variant="h4"> Contact Info</Typography>
        <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque dolorem perferendis mollitia iure voluptatum reprehenderit, dolore id veniam dolor.</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, deleniti!</Typography>
        <div className="flex gap-5">
        {ContactAdress.map( items => (
            <div key={items.tittle} className="w-1/2">
                <Typography variant="h5">
                    {items.tittle}
                </Typography>
                <Typography variant="paragraph">
                    {items.subTittle}
                </Typography>
            </div>
        ))}
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex gap-5">
            <Input label="Username" crossOrigin={undefined} />
            <Input label="Username" crossOrigin={undefined} />
        </div>
        <div className="flex flex-col gap-10 mt-10">
        <Input label="Username" crossOrigin={undefined} />
        <Textarea label="massage" />
        <Link href={""}>
            <Button color="deep-orange" className="flex items-center gap-3"> 
                massage
                <Icon icon="material-symbols:send"/>
            </Button>
        </Link>
        </div>
        </div>
        </div>
      </div>
      </>
  );
}
