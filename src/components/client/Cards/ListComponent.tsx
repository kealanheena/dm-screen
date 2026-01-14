'use client'

import React, { Fragment, useContext, useState } from "react";
import { filter, includes, map, lowerCase, find } from "lodash";

import { Close, Diversity3, Edit, OpenInNew, PersonAdd, Search } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Grid, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemText, Paper, TextField, Tooltip, Typography } from "@mui/material";
import { ScreenContext } from "@/app/context";
import CardDialog from "./CardDialog";
import Image from "next/image";


          //   <ListItemButton>
          //     <ListItemAvatar>
          //       <Avatar
          //         alt={`Avatar n°${value + 1}`}
          //         src={`/static/images/avatar/${value + 1}.jpg`}
          //       />
          //     </ListItemAvatar>
          //     <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
          //   </ListItemButton>
          // </ListItem>

const ListComponent = ({ card }: { card: { id: number; title: string; listContent: string | null; type: string }}) => {
	const { isCustomizing, playerCharacters, classes, species } = useContext(ScreenContext);

	const [open, setOpen] = useState<boolean>(false);
	const [openItem, setOpenItem] = useState(null);

	const [search, setSearch] = useState('');
	const [showSearch, setShowSearch] = useState(false);	

	const onClickShowSearch = () => {
		setShowSearch(!showSearch)
		setSearch('');
	}

	const filteredItems = filter(playerCharacters, ({ name }) => includes(name, search));

	const openEditPlayerCharacter = (item) => () => setOpenItem(item);

	return (
		<CardContent sx={{ height: '100%'}}>
			<Grid container justifyContent="space-between">
				<Grid display="flex" alignItems="center">
					<Diversity3 color='primary'/>
					<Typography sx={{ pl: 1 }} variant="h6">{card.title}</Typography>
				</Grid>

				<Grid display="flex" alignItems="center">
					{!showSearch && (
						<IconButton disabled={isCustomizing} onClick={onClickShowSearch} color={showSearch ? 'primary' : undefined}>
							<Search />
						</IconButton>
					)}

					<IconButton onClick={() => setOpenItem({})}>
						{isCustomizing ? <Edit /> : <PersonAdd />}
					</IconButton>

					<CardDialog data={openItem} setOpenItem={setOpenItem} />
				</Grid>
			</Grid>


				{showSearch && !isCustomizing && (
					<TextField
						placeholder={`Search ${lowerCase(card.listContent)}s ...`}
						autoFocus
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						fullWidth
						slotProps={{
							input: {
								style: { paddingLeft: 8 },
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={onClickShowSearch}>
											<Close fontSize="small" />
										</IconButton>
									</InputAdornment>
								),
								startAdornment: (
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								)
							}
						}}
					/>
				)}

			<Grid
				sx={{
					bgcolor: 'background.paper',
					position: 'relative',
					overflow: 'scroll',
					height: '100%',
					maxHeight: '100%',
				}}
			>
				{filteredItems.length !== 0 && (
					<List>
						{map(filteredItems, (item) => {
							const { id, name, imageUrl, url, archtype_id, species_id, subspecies_id } = item;
							const characterClass = find(classes, ['id', archtype_id]);
							const characterSpecies = find(species, ['id', species_id]);
							const characterSubspecies = find(characterSpecies.subspecies, ['id', subspecies_id]);

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
												<Fragment>
													<Typography>
														{`Lvl 6 | ${characterSubspecies ? `${characterSubspecies.name} ` : ''} ${characterSpecies.name} | ${characterClass.name}`}
													</Typography>
												</Fragment>
											}
											secondaryTypographyProps={{ style: { color: '#ededed' } }}
											sx={{ m: 0, pl: 1, color: 'white' }}
										/>
									</Grid>

									<Paper sx={{ borderRadius: 0, display: 'flex', justifyContent: 'space-around', p: 0.5, width: '100%' }}>
										<Button color="primary" onClick={() => window.open(url, '_blank', 'noopener,noreferrer')} disabled={!url}>View</Button>
										<Button color="secondary" onClick={openEditPlayerCharacter(item)}>Edit</Button>
										<Button color="error">Remove</Button>
									</Paper>
								</ListItem>
							)
						})}
						<br /> 
					</List>
				)}
			</Grid>
		</CardContent>
	)
};

export default ListComponent;