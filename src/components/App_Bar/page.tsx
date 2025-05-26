"use client";
import * as React from "react";
import { Box, Container, ListItem, Stack, Typography } from "@mui/material";

export default function AppBar() {
  return (
    <Container>
      <Stack 
      direction="row" 
      justifyContent="center" 
      spacing={5}
      sx={{py:"16px"}}
      >
        <Box>
          <Typography>ITEM 1</Typography>
        </Box>
        <Box>
          <Typography>ITEM 2</Typography>
        </Box>
        <Box>
          <Typography>ITEM 3</Typography>
        </Box>
        <Box>
          <Typography>ITEM 4</Typography>
        </Box>
      </Stack>
    </Container>
  );
}
