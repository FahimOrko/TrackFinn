import React from "react";
import useTrainData from "../services/getAllTrains";
import AllTrainsMap from "./AllTrainsMap";
import Spinner from "./Spinner";
import Error from "./Error";

const TrainsMap = () => {
  // data
  const { data, isLoading, isError } = useTrainData();

  if (isLoading)
    return (
      <section className="h-[65dvh] w-full flex items-center justify-center">
        <Spinner />
      </section>
    );
  if (isError)
    return (
      <section className="h-[65dvh] w-full flex items-center justify-center">
        <Error />
      </section>
    );

  if (!isLoading && !isError) return <AllTrainsMap data={data} />;
};

export default TrainsMap;
