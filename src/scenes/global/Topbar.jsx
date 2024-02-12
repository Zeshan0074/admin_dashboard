import React from "react";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, IconButton, InputBase } from "@mui/material";
import {
  LightModeOutlined as LightModeIcon,
  DarkModeOutlined as DarkModeIcon,
  NotificationsActiveOutlined as NotificationsIcon,
  SettingsOutlined as SettingsIcon,
  PersonOutlined as PersonIcon,
  SearchOutlined as SearchIcon,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export default function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    //This is the outer box of the top bar
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* This box is for Searchbar and it's icon */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* This box is for other icon on the right side */}

      <Box display="flex" justifyContent="space-between">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
         
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
