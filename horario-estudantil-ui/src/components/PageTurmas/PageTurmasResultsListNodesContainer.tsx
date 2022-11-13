import Box from "@mui/material/Box";
import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import throttle from "lodash/throttle";

export const PageTurmasResultsListNodesContainer = (
  props: PropsWithChildren<{ isBase: boolean }>
) => {
  const { isBase, children } = props;

  const wrapperElRef = useRef<HTMLDivElement>();

  const computeSpacing = useCallback(() => {
    const wrapperEl = wrapperElRef.current;

    if (wrapperEl) {
      const firstChild = wrapperEl.children[0];

      const wrapperClientRect = wrapperEl.getBoundingClientRect();
      const firstChildClientRect = firstChild.getBoundingClientRect();

      const targetSpacing = Math.max(
        wrapperClientRect.height / 2 - firstChildClientRect.height / 2,
        24
      );

      wrapperEl.style.paddingTop = `${targetSpacing}px`;
      wrapperEl.style.paddingBottom = `${targetSpacing}px`;
    }
  }, [wrapperElRef]);

  useEffect(() => {
    computeSpacing();

    const _computeSpacing = throttle(computeSpacing, 200);

    window.addEventListener("resize", _computeSpacing);

    return () => {
      window.removeEventListener("resize", _computeSpacing);
    };
  }, [computeSpacing]);

  if (!isBase) {
    return <>{children}</>;
  }

  return (
    <Box
      ref={wrapperElRef}
      sx={{
        gap: 5,
        height: "100%",
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};
