import React from "react";
import useTrainData from "../services/getAllTrains";
import AllTrainsMap from "./AllTrainsMap";
import Spinner from "./Spinner";

const TrainsMap = () => {
  // data
  const { data, isLoading, isError } = useTrainData();

  if (isLoading)
    return (
      <div className="h-[65dvh] w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  if (isError)
    return (
      <div className="h-[65dvh] w-full flex items-center justify-center">
        <Error />
      </div>
    );
  return <AllTrainsMap data={data} />;
};

export default TrainsMap;
