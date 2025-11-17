import React from "react";
import { map } from "lodash";

import { getDbUserId } from "@/actions/user.action";
import { getCampains } from "@/actions/campaign.action";

import { Card, CardContent, Grid, List, ListSubheader, Typography } from '@mui/material';
import ScreenListItem from "@/components/client/ScreenListItem";
import { Public } from "@mui/icons-material";
import { getScreensWithoutCampaign } from "@/actions/screen.action";



export default async function Home() {
  const userId = await getDbUserId();

  if (!userId) {
    return;
  }

  const screensWithoutCampaign = await getScreensWithoutCampaign();

  const unassignedScreens = { 
    id: 0,
    title: 'No campaign',
    screens: screensWithoutCampaign,
    _count: { screens: screensWithoutCampaign.length },
  }

  const campaigns = await getCampains() || [];

  console.log({campaigns});

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={6}>
        <Card>
          <CardContent>
            <Typography>{`Your DM Screens`}</Typography>
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
              {[unassignedScreens, ...campaigns].map(({ id, title, screens, _count }) => (
                <li key={`campaigns-${id}`}>
                  <ul>
                    <ListSubheader
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Public sx={{ pr: 0.5 }}/>
                      {`${title} (${_count.screens})`}
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
