import React from "react";
import { map } from "lodash";

import { getDbUserId, getUserScreens } from "@/actions/user.action";
import { Card, CardContent, Grid, List, ListSubheader, Typography } from '@mui/material';
import ScreenListItem from "@/components/client/ScreenListItem";
import { Public } from "@mui/icons-material";


export default async function Home() {
  const userId = await getDbUserId();

  if (!userId) {
    return;
  }

  const { screens, count } = await getUserScreens(userId);

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={4}>
        <Card>
          <CardContent>
            <Typography>{`Your DM Screens (${count})`}</Typography>
            <List
              sx={{
                width: '100%',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
              }}
              subheader={<li />}
            >
              {['Testing Campaign'].map((sectionId) => (
                <li key={`section-${sectionId}`}>
                  <ul>
                    <ListSubheader>
                      <Public />
                      {sectionId}
                    </ListSubheader>
                    {map(screens, (screen) => (
                      <ScreenListItem screen={screen} />
                    ))}
                  </ul>
                </li>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
