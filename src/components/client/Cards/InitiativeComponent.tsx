'use client'

import React, { Fragment, useContext, useEffect, useState } from "react";
import { find, map, reverse, sortBy } from "lodash";

import { Bloodtype, Groups } from "@mui/icons-material";
import { Button, Card, CardContent, Divider, Grid, List, ListItem, ListItemText, Paper, Tooltip, Typography } from "@mui/material";
import { getPlayerCharacters } from "@/actions/playerCharacter.action";
import PlayerCharacterFormDialog from "../PlayerCharacterFormDialog";
import { ScreenContext } from "@/app/context";
import Image from "next/image";

const InititiveComponent = ({ card }) => {
	const { classes, species } = useContext(ScreenContext);

	const [search, setSearch] = useState('');
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		const getData = async () => {
			const data = await getPlayerCharacters();

			const newItems = map(data || [], (oldData) => {
				const max = 20;

				const initiative = Math.floor(Math.random() * max);

				return {
					...oldData,
					initiative,
				}
			})
			
			setItems(newItems);
		};

		try {
			getData();
		} finally {
			setIsLoading(false);
		}
	}, []);

	return (
			<CardContent sx={{ height: '100%'}}>
				<Grid container justifyContent="space-between">
					<Grid display="flex" alignItems="center">
						<Groups color='primary'/>
						<Typography sx={{ pl: 1 }} variant="h6">{card.title}</Typography>
					</Grid>

					<PlayerCharacterFormDialog />
				</Grid>
						
					<Grid
						sx={{
							bgcolor: 'background.paper',
							position: 'relative',
							overflow: 'scroll',
							height: '100%',
							maxHeight: '100%',
						}}
					>
							<List
								sx={{
									'& ul': { padding: 0 },
								}}
							>
								{map(reverse(sortBy(items, ['initiative'])), (item) => { 
									const { id, name, imageUrl, url, archtype_id, species_id, subspecies_id } = item;
									const characterClass = find(classes, ['id', archtype_id]);
									const characterSpecies = find(species, ['id', species_id]);
									const characterSubspecies = find(characterSpecies.subspecies, ['id', subspecies_id]);

									console.log({ key: item.key })

									return (
									<ListItem
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'flex-start',
											background: `url("/icons/classes/${characterClass.key}.png") no-repeat center center`,
											backgroundSize: '100% auto',
										}}
										sx={{ p: 0, pt: 3, mb: 1 }}
										key={`player_character_${id}`}
									>
										<Grid display="flex" alignItems="center" sx={{ pb: 2, pl: 1, pr: 1 }}>
											{imageUrl ? <div/> :
												<Image
													alt={`${characterSpecies.key} species icon`}
													src={`/icons/species/${characterSpecies.key}.png`}
													style={{ backgroundColor: 'white', borderRadius: '4px', border: '2px solid red' }}
													height="50"
													width="50"
												/>
											}
											
											<ListItemText
												primary={name}
												secondary={
													<Grid>
														<Typography>AC 14</Typography>
														<Typography>Spell DC: 12</Typography>
													</Grid>
												}
												secondaryTypographyProps={{ style: { color: '#ededed' } }}
												sx={{ m: 0, pl: 1, color: 'white' }}
											/>
										</Grid>

										<Paper sx={{ borderRadius: 0, display: 'flex', justifyContent: 'space-around', p: 0.5, width: '100%' }}>
											<Grid display="flex" flexDirection="column" alignItems="center">
												<Typography>INIT</Typography>
												<Typography>{item.initiative}</Typography>
											</Grid>

											<Divider sx={{ p: 1 }} orientation="vertical" variant="middle" flexItem />

											<Grid display="flex" flexDirection="column" alignItems="center">
												<Typography>HP</Typography>
												<Typography>{item.current_hit_points}/{item.max_hit_points}</Typography>
											</Grid>
										</Paper>
									</ListItem>
										// <ListItem key={`condition_${item.name}`} sx={{ display: 'flex', justifyContent: 'space-between' }}>
										// 	<Grid display="flex">
										// 		<Grid display="flex" flexDirection="column" alignItems="center">
										// 			<Typography>Init</Typography>
										// 			<Typography>{item.initiative}</Typography>
										// 		</Grid>

										// 		<Divider sx={{ p: 1 }} orientation="vertical" variant="middle" flexItem />

										// 		<Typography sx={{ pl: 1 }} >{item.name}</Typography>
										// 		{(item.current_hit_points/item.max_hit_points) <= 0.5 && (
										// 			<Tooltip title="Bloodied">
										// 				<Bloodtype sx={{ pl: 1 }}  color="error"/>
										// 			</Tooltip>
										// 		)}
										// 	</Grid>

										// 	<Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center">
										// 		<Typography>HP</Typography>
										// 		<Typography>{item.current_hit_points}/{item.max_hit_points}</Typography>
										// 	</Grid>
										// </ListItem>
									)
								})}
								<br /> 
							</List>
					</Grid>
			</CardContent>
	)
};

export default InititiveComponent;