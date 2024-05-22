import { FC } from "react";
import { useAppSelector } from "@/store";

import HomeComponent from "@/components/HomeComponent";

const HomePage: FC = () => {
  const { user } = useAppSelector((state) => state.auth);

  return <HomeComponent {...user} />;
};

export default HomePage;
