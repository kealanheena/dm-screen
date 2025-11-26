import React, { Fragment } from "react";
import { map } from 'lodash';

import { getPlayerCharacters } from "@/actions/playerCharacter.action";

import { Card, CardContent, Grid, List, ListItem, ListItemText, Typography, IconButton, Link } from '@mui/material';
import { Add, Groups, OpenInNew, Person } from '@mui/icons-material';


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

					<IconButton> 
						<Add />
					</IconButton>
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
											<Typography component="span" variant="body2">{`class: ${pc.class.title}`}</Typography>
											{/* <Typography variant="body2">{`species: ${capitalize(pc.species?.title)}`}</Typography> */}
											
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
