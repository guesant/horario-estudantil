import Button from "@mui/material/Button";
import { ICategoria } from "./PageTurmasContext";

type IPageTurmasResultsListNodesNodeProps = {
  categoria: ICategoria;

  isSelected?: boolean;
  onSetSelected: () => void;
};

const PageTurmasResultsListNodesNode = (
  props: IPageTurmasResultsListNodesNodeProps
) => {
  const { categoria, isSelected, onSetSelected } = props;

  return (
    <Button
      color="success"
      disableElevation
      key={categoria.id}
      onClick={() => onSetSelected()}
      variant={isSelected ? "contained" : "outlined"}
      sx={{
        py: 4,
        fontSize: {
          xs: "0.975rem",
          sm: "1rem",
          md: "1.2rem",
        },
      }}
    >
      {categoria.titulo}
    </Button>
  );
};

export default PageTurmasResultsListNodesNode;
