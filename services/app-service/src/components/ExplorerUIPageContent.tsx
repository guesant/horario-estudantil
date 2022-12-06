import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type IContainerPageContentProps = {
  children?: any
  title?: string;
}

const ExplorerUIPageContent = (props: IContainerPageContentProps) => {
  const { children, title } = props;

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          overflow: "auto",
          flexDirection: "column",
          p: { xs: 2, sm: 3, md: 5 },
        }}
      >
        {title && <>
            <Typography variant="h4" sx={{ my: 1 }}>
              {title}
            </Typography>

            <Divider sx={{ my: 2 }} />
        </>}


        {children}
      </Box>
    </>
  );
};

export default ExplorerUIPageContent;
