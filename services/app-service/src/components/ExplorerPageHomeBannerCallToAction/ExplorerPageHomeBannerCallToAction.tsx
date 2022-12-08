import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { ExplorerContext } from '../ExplorerContext/ExplorerContext';
import UILoading from '../UILoading/UILoading';

const HomeCallToActionSelectInstituicao = dynamic(
  () =>
    import(
      '../ExplorerPageHomeBannerCallToActionSelectInstituicao/ExplorerPageHomeBannerCallToActionSelectInstituicao'
    ),
  { loading: () => <UILoading /> },
);

const HomeCallToActionSelectedInstituicaoActions = dynamic(
  () =>
    import(
      '../ExplorerPageHomeBannerCallToActionInstituicaoActions/ExplorerPageHomeBannerCallToActionInstituicaoActions'
    ),
  { loading: () => <UILoading /> },
);

const ExplorerPageHomeBannerCallToAction = () => {
  const { sigla } = useContext(ExplorerContext);

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

export default ExplorerPageHomeBannerCallToAction;
