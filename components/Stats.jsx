"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 4,
    text: "Project completed",
  },
  {
    num: 5,
    text: "Expert languages",
  },
  {
    num: 40,
    text: "Code committed",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto xl:mt-[-5rem]">
        <div className="flex flex-wrap mx-auto gap-6 max-w-[80vw] xl:mx-w-none lg:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-1 gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl lg:text-5xl Xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15
                      ? "max-w-[100px] xl:max-w-[200px] lg:max-w-[150px]"
                      : "max-w-[150xp]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
