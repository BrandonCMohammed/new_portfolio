"use client";
import * as React from "react";
import { Box, Container, ListItem, Stack, Typography } from "@mui/material";

export default function AppBar() {
  return (
    <Container>
      <Stack
      sx={{py:"16px"}}
      >
        <Box sx={{display:"flex", justifyContent:"center", gap:"16px"}}>
          <Typography>HOME</Typography>
          <Typography>ABOUT</Typography>
          <Typography>WORK</Typography>
        </Box>
      </Stack>
    </Container>
  );
}
