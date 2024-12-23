import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full xl:mt-[-2rem] lg:mt-[-2rem] mb-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row lg:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left lg:text-left lg:order-none xl:order-none order-2">
            <span className="text-lg">Web Developer</span>
            <h1 className="h1">
              <span className="text-outline text-transparent">Hello I'm</span>

              <br />
              <span className="text-accent">Min Khant Thaw</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experience and I'm proficient
              in various programming languages.
            </p>

            {/* Social Button */}
            <div className="flex flex-col xl:flex-row lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 lg:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="xl:order-none lg:order-none order-1 mb-8">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
