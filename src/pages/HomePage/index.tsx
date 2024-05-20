import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";

import HomeComponent from "@/components/HomeComponent";

import { fetchAllEvents } from "@/store/homeSlice";

const HomePage: FC = () => {
  const dispatch = useAppDispatch();

  const home = useAppSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchAllEvents());
  }, []);

  return <HomeComponent {...home} />;
};

export default HomePage;
