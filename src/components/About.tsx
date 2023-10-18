import { Typography } from "@material-tailwind/react";
import React from "react";

export default function About() {
  return (
    <>
      <div className="pt-12">
        <div className="flex flex-col gap-10 py-28 px-10 ">
          <div className="flex flex-col items-center justify-center">
            <Typography variant="h3" className="mb-3">
              About <span className="text-primary">Us</span>
            </Typography>
            <Typography variant="paragraph" className="lg:w-1/2 text-center">
              Maecenas temTypography variant="paragraph"us tellus eget condimentum rhoncus sem quam semper
              libero pulvinar hendrerit id lorem.
            </Typography>
          </div>
          <div className="container grid md:grid-cols-3 lg:grid-cols-3 place-items-center grid-cols-1 gap-5">
            <div className="flex w-80 flex-col text-3xl">
              <Typography variant="h2">Lorem ipsum dolor sit amet consectetur</Typography>
            </div>
            <div className="flex w-80 flex-col">
              <Typography variant="h5" className="text-xl mb-2">Lorem, ipsum </Typography>
              <Typography variant="paragraph" className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                itaque cupiditate similique ullam porro voluptatum, ex vero?
                Eaque asperiores, unde earum quia veniam culpa, sint optio
                quidem aliquam voluptate, sapiente similique provident animi id
                nemo illum maiores non natus placeat!
              </Typography>
            </div>{" "}
            <div className="flex w-80 flex-col">
              <Typography variant="h5" className="text-xl">Lorem, ipsum</Typography>
              <Typography variant="paragraph" className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                itaque cupiditate similique ullam porro voluptatum, ex vero?
                Eaque asperiores, unde earum quia veniam culpa, sint optio
                quidem aliquam voluptate, sapiente similique provident animi id
                nemo illum maiores non natus placeat!
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
