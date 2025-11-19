import React from "react";
import { flatMap, map } from "lodash";

import { getDbUserId } from "@/actions/user.action";
import { getCampaigns } from "@/actions/campaign.action";

import { Card, CardContent, Grid, List, ListSubheader, Typography } from '@mui/material';
import ScreenListItem from "@/components/client/ScreenListItem";
import { Public } from "@mui/icons-material";
import { getCampaignlessScreens } from "@/actions/screen.action";



export default async function Home() {
  const userId = await getDbUserId();

  if (!userId) {
    return;
  }

  const campaignlessScreens = await getCampaignlessScreens() || [];
  const campaigns = await getCampaigns() || [];

  const campaignScreens = flatMap(campaigns, ({ screens }) => screens);
  const screens = [
    ...campaignlessScreens,
    ...campaignScreens
  ]

  const allScreens = { 
    id: 'all_screens',
    title: 'All screens',
    screens,
    _count: { screens: screens.length }
  }

  const unassignedScreens = { 
    id: 'unassigned_screens',
    title: 'Screens without a campaign',
    screens: campaignlessScreens,
    _count: { screens: campaignlessScreens.length },
  }

  const allCampaigns = [allScreens, unassignedScreens, ...campaigns];

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid size={6}>
        <Card>
          <CardContent>
            <Typography>Your DM Screens</Typography>
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
              {map(allCampaigns, ({ _count, ...campaign }) => (
                <li key={`campaigns-${campaign.id}`}>
                  <ul>
                    <ListSubheader
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Public sx={{ pr: 0.5 }}/>
                      {`${campaign.title} (${_count.screens})`}
                    </ListSubheader>

                    {map(campaign.screens, (screen) => (
                      <ScreenListItem key={`campaigns-${campaign.id}-screens-${screen.id}`} screen={screen} />
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
