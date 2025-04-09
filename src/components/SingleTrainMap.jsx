import React from "react";
import useTrainData from "../services/getSingleTrain";
import Spinner from "./Spinner";
import SingleTrainMapChild from "./SingleTrainMapChild";
import TrainNotAvaiable from "./TrainNotAvaiable";

const SingleTrainMap = ({ trainNum, date }) => {
  const { data, isLoading, isError } = useTrainData(date, parseInt(trainNum));

  if (isLoading)
    return (
      <section className="h-full w-full flex items-center justify-center">
        <Spinner />
      </section>
    );

  if (!isLoading && !isError) {
    const { trainNumber, trainType, trainLocations } = data;

    if (!trainLocations)
      return (
        <TrainNotAvaiable>Train is currently not running</TrainNotAvaiable>
      );

    const newItem = { trainNumber, trainType, trainLocations };
    const lng = newItem?.trainLocations[0]?.location[0];
    const lat = newItem?.trainLocations[0]?.location[1];

    return <SingleTrainMapChild newItem={newItem} lat={lat} lng={lng} />;
  }
};

export default SingleTrainMap;
