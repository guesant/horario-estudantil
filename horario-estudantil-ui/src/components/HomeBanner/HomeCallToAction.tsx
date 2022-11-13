import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import HomeCallToActionSelectUnidade from "./HomeCallToActionSelectUnidade";
import HomeCallToActionUnidadeSelected from "./HomeCallToActionUnidadeSelected";

const HomeCallToAction = () => {
  const { selectedUnidadeDeEnsino } = useContext(AppContext);

  if (selectedUnidadeDeEnsino === null) {
    return (
      <>
        <HomeCallToActionSelectUnidade />
      </>
    );
  }

  return (
    <>
      <HomeCallToActionUnidadeSelected />
    </>
  );
};

export default HomeCallToAction;
