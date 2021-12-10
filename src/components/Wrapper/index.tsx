import React from "react";
import Box from "@mui/material/Box";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
