import { IAppPage } from "../../etc/domain/app/IAppPage";
import PageTurmasBase from "./PageTurmasBase";
import { PageTurmasContextProvider } from "./PageTurmasContext";

const PageTurmas: IAppPage<any> = () => {
  return (
    <>
      <PageTurmasContextProvider>
        <PageTurmasBase />
      </PageTurmasContextProvider>
    </>
  );
};

export default PageTurmas;
