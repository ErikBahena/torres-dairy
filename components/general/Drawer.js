import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { GiFarmTractor } from "react-icons/gi";
import { MdOutlineWavingHand } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

export default function Drawer({ open, toggleDrawer, pages }) {
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          {pages.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <GiFarmTractor size={30} />}
                {index === 1 && <MdOutlineWavingHand size={30} />}
                {index === 2 && <FaQuestion size={30} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
}
