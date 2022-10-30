declare module "query-selector" {
  export default <T extends Element = Element>(
    query: string,
    doc: Document | Node | Element
  ) => NodeListOf<T>;
}
