import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import {memo, useCallback, useContext, useEffect, useMemo, useRef, useState,} from "react";
import {ICategoria} from "../ExplorerPageTurmas/ExplorerPageTurmasContext";
import {ExplorerPageTurmasResultsViewListNodesContainer} from "./ExplorerPageTurmasResultsViewListNodesContainer";
import ExplorerPageTurmasResultsViewListNodesNode from "./ExplorerPageTurmasResultsViewListNodesNode";
import {
  ExplorerPageTurmasResultsViewContext
} from "../ExplorerPageTurmasResultsView/ExplorerPageTurmasResultsViewContext";
import {useNavigateToTurma} from "../ExplorerPageTurmas/useNavigateToTurma";

const checkIsBaseCategorias = (categorias: ICategoria[]) =>
  categorias.length > 0 &&
  categorias.every((categoria) => categoria.categoriaTurmaPai === null);

type IPageTurmasResultsListNodesProps = { categorias: ICategoria[] };

const ExplorerPageTurmasResultsViewListNodes = (
  props: IPageTurmasResultsListNodesProps
) => {
  const {categorias} = props;

  const navigateToTurma = useNavigateToTurma();

  const bgWrapperElRef = useRef<HTMLDivElement>();

  const {getSubCategorias, getParentCategoria, getCategoria} = useContext(
    ExplorerPageTurmasResultsViewContext
  );

  const [selectedId, setSelectedId] = useState<number | string | null>(null);

  const selectedCategoria = useMemo(
    () => getCategoria(selectedId),
    [getCategoria, selectedId]
  );

  const isBase = checkIsBaseCategorias(categorias);

  const subCategorias = useMemo(
    () => getSubCategorias(selectedId),
    [getSubCategorias, selectedId]
  );

  const parentCategoria = useMemo(() => {
    if (categorias.length === 0) {
      return null;
    }

    const [{id}] = categorias;

    return getParentCategoria(id);
  }, [categorias, getParentCategoria]);

  const scrollIntoView = useCallback(() => {
    const bgContainerEl = bgWrapperElRef.current;

    if (bgContainerEl) {
      bgContainerEl.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [bgWrapperElRef]);

  const scrollNextIntoView = useCallback(() => {
    const bgContainerEl = bgWrapperElRef.current;

    if (bgContainerEl) {
      const nextEl = bgContainerEl.nextElementSibling;

      nextEl?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [bgWrapperElRef]);

  useEffect(() => void scrollIntoView(), [scrollIntoView]);

  useEffect(() => {
    setSelectedId(categorias.length === 1 ? categorias[0].id : null);
  }, [categorias]);

  useEffect(() => {
    if (selectedCategoria) {
      const {turmas} = selectedCategoria;

      if (turmas.length === 1) {
        const [turma] = turmas;
        navigateToTurma(turma.id);
      }
    }
  }, [selectedCategoria, navigateToTurma]);

  if (categorias.length <= 1) {
    return null;
  }

  const title = parentCategoria?.tituloFilhos ?? "Categoria";

  return (
    <ExplorerPageTurmasResultsViewListNodesContainer isBase={isBase}>
      <Box ref={bgWrapperElRef}>
        <Typography variant="h5" sx={{mb: 3}}>
          {title}
        </Typography>

        <ButtonGroup fullWidth variant="outlined">
          {categorias.map((cat) => (
            <ExplorerPageTurmasResultsViewListNodesNode
              key={cat.id}
              categoria={cat}
              isSelected={cat.id === selectedId}
              onSetSelected={() => {
                setSelectedId(cat.id);
                scrollNextIntoView();
              }}
            />
          ))}
        </ButtonGroup>
      </Box>

      {subCategorias.length > 0 && (
        <ExplorerPageTurmasResultsViewListNodes
          key={selectedId}
          categorias={subCategorias}
        />
      )}
    </ExplorerPageTurmasResultsViewListNodesContainer>
  );
};

export default memo(ExplorerPageTurmasResultsViewListNodes);
