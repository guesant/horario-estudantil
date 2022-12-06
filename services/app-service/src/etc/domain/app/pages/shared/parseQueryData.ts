import { ParsedUrlQuery } from "querystring";

const parseUE = (rawUE: any) => {
  if (typeof rawUE !== "string") {
    return null;
  }

  const ue = rawUE.trim();

  if (ue.length === 0) {
    return null;
  }

  return ue;
};

export const parseQueryData = (query: ParsedUrlQuery) => {
  return {
    ue: parseUE(query.ue),
  };
};
