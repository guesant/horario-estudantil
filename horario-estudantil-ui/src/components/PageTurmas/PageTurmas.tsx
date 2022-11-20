import { GetServerSideProps } from "next";
import { initializeApollo } from "../../etc/infraestructure/apollo/initializeApollo";
import { IAppPage } from "../../etc/domain/app/pages/IAppPage";
import { getSharedServerSideProps } from "../../etc/domain/app/pages/shared/getSharedServerSideProps";
import { parseQueryData } from "../../etc/domain/app/pages/shared/parseQueryData";
import log from "../../etc/infraestructure/log/log";
import PageTurmasBase from "./PageTurmasBase";
import { PageTurmasContextProvider } from "./PageTurmasContext";
import { PAGE_TURMAS_DATA_CATEGORIAS } from "./PageTurmasData";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  const shared = await getSharedServerSideProps(context, apolloClient);

  const { ue } = parseQueryData(context.query);

  if (typeof ue === "string") {
    await apolloClient
      .query({
        variables: { sigla: ue },
        query: PAGE_TURMAS_DATA_CATEGORIAS,
      })
      .catch(() => {
        log.error("Can not fetch turmas", { params: { sigla: ue } });
      });
  }

  return {
    ...shared,
    props: {
      ...shared.props,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

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
