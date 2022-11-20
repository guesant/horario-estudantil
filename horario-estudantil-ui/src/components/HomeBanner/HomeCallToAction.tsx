import dynamic from "next/dynamic";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import AppLoading from "../AppLoading/AppLoading";

const HomeCallToActionSelectInstituicao = dynamic(
  () => import("./HomeCallToActionSelectInstituicao"),
  { loading: () => <AppLoading /> }
);

const HomeCallToActionSelectedInstituicaoActions = dynamic(
  () => import("./HomeCallToActionSelectedInstituicaoActions"),
  { loading: () => <AppLoading /> }
);

const HomeCallToAction = () => {
  const { sigla } = useContext(AppContext);

  if (sigla === null) {
    return (
      <>
        <HomeCallToActionSelectInstituicao />
      </>
    );
  }

  return (
    <>
      <HomeCallToActionSelectedInstituicaoActions />
    </>
  );
};

export default HomeCallToAction;
