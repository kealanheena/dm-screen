import React, { Fragment } from "react";
import { capitalize, map } from 'lodash';

import { getPlayerCharacters } from "@/actions/playerCharacter.action";

import { Card, CardContent, Grid, List, ListItem, ListItemText, Typography, IconButton } from '@mui/material';
import { Groups, OpenInNew, Person } from '@mui/icons-material';
import PlayerCharacterFormDialog from "@/components/client/PlayerCharacterFormDialog";



export default async function PlayerCharacters() {
  const playerCharacters = await getPlayerCharacters() || [];

  return (
		<Card sx={{ height: '100%'}}>
			<CardContent>
				<Grid container justifyContent="space-between">
					<Grid display="flex" alignItems="center">
						<Groups color='primary'/>
						<Typography sx={{ pl: 1 }} variant="h6">Player characters</Typography>
					</Grid>

					<PlayerCharacterFormDialog />
				</Grid>

				<Grid>
					<List
						sx={{
							width: '100%',
							position: 'relative',
							overflow: 'auto',
							// maxHeight: 300,
							// '& ul': { padding: 0 },
						}}
						// subheader={<li />}
					>
						{map(playerCharacters, (pc) => (
							<ListItem key={`player_character_${pc.id}`}>
								<ListItemText
									primary={
										<Grid display="flex">
											<Person />
											<Typography sx={{ pl: 1 }} >{pc.name}</Typography>
										</Grid>
									}
									secondary={
										<Fragment>
											<Typography component="span" variant="body2">{`class: ${pc.class.name}`}</Typography>
											<Typography variant="body2">{`species:
												${pc.subspecies?.name ? ` ${capitalize(pc.subspecies?.name)} `  : ''}
												${capitalize(pc.species?.name)}
											`}</Typography>
											
										</Fragment>
									}
									sx={{ pl: 0.5 }} 
								/>
								{pc.url && (
									<IconButton
										// TODO: for clickable element this must be a client component
										// onClick={() => window.open(pc.url, '_blank')}
									>
										<OpenInNew />
									</IconButton>
								)}
							</ListItem>
						))}
					</List>
				</Grid>
			</CardContent>
		</Card>
  );
}
