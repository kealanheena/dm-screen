import React from 'react';
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';


export default async function Navbar() {
  const user = await currentUser()

  if (user) {
    syncUser()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DM screen
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}