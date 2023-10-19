import { Typography } from "@material-tailwind/react";

type AboutSection = {
  id: number,
  tittle: string,
  desc: string
}



export const aboutSection: AboutSection[] = [
  {
    id: 1,
    tittle: 'Lorem, ipsum',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque '
  },
  {
    id: 2,
    tittle: 'Lorem, ipsum',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque '
  }
]



const About = () => {
  return (
    <>
      <div className="mt-32">
        <div className="flex flex-col gap-10 py-28 px-10 ">
          <div className="flex flex-col items-center justify-center">
            <Typography variant="h3" className="mb-3">
              About <span className="text-primary">Us</span>
            </Typography>
            <Typography variant="paragraph" className="lg:w-1/2 text-center">
              Maecenas temTypography us tellus eget condimentum rhoncus sem quam semper
              libero pulvinar hendrerit id lorem.
            </Typography>
          </div>
          <div className="container grid md:grid-cols-3 lg:grid-cols-3 place-items-center grid-cols-1 gap-5">
            <div className="flex w-80 flex-col text-3xl">
              <Typography variant="h2">Lorem ipsum dolor sit amet consectetur</Typography>
            </div>
            {aboutSection.map( items => (
            <div key={items.id}>
              <div className="flex w-80 flex-col">
              <Typography variant="h5" className="text-xl mb-2">{items.tittle}</Typography>
              <Typography variant="paragraph" className="text-gray-500">
                {items.desc}
              </Typography>
            </div>
          </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
