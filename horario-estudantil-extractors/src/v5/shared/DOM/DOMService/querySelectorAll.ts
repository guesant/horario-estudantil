declare module "query-selector";

const getQuerySelectorPolyfill = () =>
  import("query-selector").then((module) => module.default);

export const querySelectorAll = async <T extends Element = Element>(
  query: string,
  doc: Document | Node | Element
): Promise<NodeListOf<T>> => {
  const docAsEl = doc as Element;

  if (typeof docAsEl.querySelectorAll !== "undefined") {
    return docAsEl.querySelectorAll<T>(query);
  }

  return getQuerySelectorPolyfill().then((qs) => qs(query, doc));
};
