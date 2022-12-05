const getDOMParserPolyfill = () =>
  import("@xmldom/xmldom").then(({ DOMParser }) => DOMParser);

export const getDOMParser = async () => {
  if (typeof DOMParser !== "undefined") {
    return new DOMParser();
  }

  const DOMParserFactory = await getDOMParserPolyfill();

  return new DOMParserFactory({
    locator: {},
    errorHandler: {
      warning: function (w) {},
      error: function (e) {},
      fatalError: function (e) {
        // console.error(e);
      },
    },
  });
};
