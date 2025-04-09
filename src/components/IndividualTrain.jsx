import React from "react";
import SearchForm from "./SearchForm";
import SingleTrainInfo from "./SingleTrainInfo";
import { useSearchParams } from "react-router-dom";
import SingleTrainMap from "./SingleTrainMap";
import TrainNotAvaiable from "./TrainNotAvaiable";

const IndividualTrain = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const trainNum = searchParams?.get("trainNum");
  const date = searchParams?.get("date");
  return (
    <section>
      <main className="grid grid-rows-5 grid-cols-1 md:grid-cols-5 h-[110dvh] md:h-[70dvh] w-full">
        <div
          id="map"
          className="relative h-full w-full row-span-2 col-span-5 md:row-span-5 md:col-span-2"
        >
          {trainNum && date ? (
            <SingleTrainMap trainNum={trainNum} date={date} />
          ) : (
            <>
              <TrainNotAvaiable>
                First enter your train details
              </TrainNotAvaiable>
            </>
          )}
        </div>
        <div
          id="train info"
          className="h-full w-full row-span-3 col-span-5 md:row-span-5 md:col-span-3 px-10 py-8 bg-vrgrayMid"
        >
          {trainNum && date ? (
            <SingleTrainInfo
              trainNum={trainNum}
              date={date}
              setSearchParams={setSearchParams}
            />
          ) : (
            <SearchForm />
          )}
        </div>
      </main>
    </section>
  );
};

export default IndividualTrain;
