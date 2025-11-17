import React from 'react';
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Map } from '@mui/icons-material';
import { SignInButton, UserButton } from '@clerk/nextjs';

import Redirect from '@/components/client/Redirect';


export default async function Navbar() {
  const user = await currentUser();

  if (user) {
    syncUser()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {user && <Redirect isUser={!!user} />}
      <AppBar position="static">
        <Toolbar>
          <Map />
        
          <Typography variant="h6" component="div" sx={{ pl: 1, flexGrow: 1 }}>
            DM screen
          </Typography>

          {user ? (
             <UserButton />
          ) : (
            <SignInButton mode="modal">
              <Button color="inherit">Log in</Button>
            </SignInButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}