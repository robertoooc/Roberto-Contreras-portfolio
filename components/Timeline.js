import { timeline } from "@/constants/constants";
export default function Timeline() {
  const timelineDisplay = timeline.map((year) => {
    return (
      <div key={year.year} className="flex w-5/6 mx-auto my-5">
        <div className=" bg-white rounded-full h-fit sm:w-30 mr-5">
          <p className="text-lg font-bold m-3">{year.icon}</p>
        </div>
        <div className="w-4/6">
          <p className="text-xl font-medium">{year.year}-</p>
          <p className=" text-lg">{year.text}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="">
      <h1 className="text-center text-3xl font-medium underline">My Story</h1>
      {timelineDisplay}
    </div>
  );
}
