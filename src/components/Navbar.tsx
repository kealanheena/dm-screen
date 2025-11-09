import React from 'react';
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { SignInButton, SignOutButton } from '@clerk/nextjs';

import Redirect from './Redirect';


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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DM screen
          </Typography>

          {user ? (
             <SignOutButton>
              <Button color="inherit">Log out</Button>
            </SignOutButton>
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