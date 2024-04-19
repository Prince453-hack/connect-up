import MeetingTypeList from "@/components/MeetingTypeList";
import Upcoming from "@/components/Upcoming";
import React from "react";

const Home = () => {
  const now = new Date();

  const TIME = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const DATE = new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded-lg py-2 text-center font-normal text-base">
            <Upcoming type="upcoming" />
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{TIME}</h1>
            <p className="text-lg font-medium text-sky-1">{DATE}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
