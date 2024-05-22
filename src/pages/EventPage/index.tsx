import { FC } from "react";

import { createRace } from "@/store/eventSlice";
import { useAppDispatch } from "@/store";

import EventComponent from "@/components/EventComponent";

const EventPage: FC = () => {
  const dispatch = useAppDispatch();

  const dispatchCreateRace = (data: any) => {
    dispatch(createRace(data));
  };
  return <EventComponent dispatchCreateRace={dispatchCreateRace} />;
};

export default EventPage;
