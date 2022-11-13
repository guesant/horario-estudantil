import dynamic from "next/dynamic";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import AppLoading from "../AppLoading/AppLoading";

const HomeCallToActionSelectUnidade = dynamic(
  () => import("./HomeCallToActionSelectUnidade"),
  { loading: () => <AppLoading /> }
);

const HomeCallToActionUnidadeActions = dynamic(
  () => import("./HomeCallToActionUnidadeActions"),
  { loading: () => <AppLoading /> }
);

const HomeCallToAction = () => {
  const { selectedUE: selectedUnidadeDeEnsino } = useContext(AppContext);

  if (selectedUnidadeDeEnsino === null) {
    return (
      <>
        <HomeCallToActionSelectUnidade />
      </>
    );
  }

  return (
    <>
      <HomeCallToActionUnidadeActions />
    </>
  );
};

export default HomeCallToAction;
