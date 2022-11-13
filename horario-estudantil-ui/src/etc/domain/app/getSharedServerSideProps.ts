import { GetServerSidePropsContext } from "next";

export const getSharedServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;

  const initialQuery = {
    ue: query?.ue ?? null,
  };

  return { props: { initialQuery } };
};
