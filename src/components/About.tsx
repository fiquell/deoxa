import { Typography } from "@material-tailwind/react";
import React from "react";

export default function About() {
  return (
    <>
      <div className="pt-12">
        <div className="flex flex-col gap-10 py-28 px-10 ">
          <div className="flex flex-col items-center justify-center">
            <Typography variant="h3" className="pb-5">
              About <span className="text-primary">Us</span>
            </Typography>
            <p className="lg:w-1/2 text-gray-500 text-center">
              Maecenas tempus tellus eget condimentum rhoncus sem quam semper
              libero pulvinar hendrerit id lorem.
            </p>
          </div>
          <div className="container grid lg:grid-cols-3 place-items-center grid-cols-1 gap-5">
            <div className="flex w-80 flex-col text-3xl">
              <h2>Lorem ipsum dolor sit amet consectetur</h2>
            </div>
            <div className="flex w-80 flex-col">
              <p className="text-xl mb-2">Lorem, ipsum </p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                itaque cupiditate similique ullam porro voluptatum, ex vero?
                Eaque asperiores, unde earum quia veniam culpa, sint optio
                quidem aliquam voluptate, sapiente similique provident animi id
                nemo illum maiores non natus placeat!
              </p>
            </div>{" "}
            <div className="flex w-80 flex-col">
              <p className="text-xl">Lorem, ipsum</p>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                itaque cupiditate similique ullam porro voluptatum, ex vero?
                Eaque asperiores, unde earum quia veniam culpa, sint optio
                quidem aliquam voluptate, sapiente similique provident animi id
                nemo illum maiores non natus placeat!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
