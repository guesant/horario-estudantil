import dynamic from "next/dynamic";
import {useContext} from "react";
import {ExplorerContext} from "../ExplorerContext/ExplorerContext";
import AppLoading from "../UIExplorerLoading/AppLoading";

const HomeCallToActionSelectInstituicao = dynamic(
  () => import("../ExplorerPageHomeBannerCallToActionSelectInstituicao/ExplorerPageHomeBannerCallToActionSelectInstituicao"),
  {loading: () => <AppLoading/>}
);

const HomeCallToActionSelectedInstituicaoActions = dynamic(
  () => import("../ExplorerPageHomeBannerCallToActionInstituicaoActions/ExplorerPageHomeBannerCallToActionInstituicaoActions"),
  {loading: () => <AppLoading/>}
);

const ExplorerPageHomeBannerCallToAction = () => {
  const {sigla} = useContext(ExplorerContext);

  if (sigla === null) {
    return (
      <>
        <HomeCallToActionSelectInstituicao/>
      </>
    );
  }

  return (
    <>
      <HomeCallToActionSelectedInstituicaoActions/>
    </>
  );
};

export default ExplorerPageHomeBannerCallToAction;
