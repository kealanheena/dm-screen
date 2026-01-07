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
						{map(filteredItems, ({ id, name, imageUrl, url, classId, speciesId, subspeciesId }) => {
							const characterClass = find(classes, ['id', classId]);
							const characterSpecies = find(species, ['id', speciesId]);
							const characterSubspecies = find(characterSpecies.subspecies, ['id', subspeciesId]);

							return (
								<ListItem
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'flex-start',
										background: `url("/icons/classes/${characterClass.key}.jpeg") no-repeat center center`,
										backgroundSize: '70% auto'
									}}
									sx={{ p: 0, pt: 3, mb: 1 }}
									key={`player_character_${id}`}
								>
									<Grid display="flex" sx={{ pb: 2, pl: 1, pr: 1 }}>
										{imageUrl ? <div/> :
											<Image
												alt={`${characterSpecies.key} species icon`}
												src={`/icons/species/${characterSpecies.key}.png`}
												style={{ borderRadius: '4px', border: '2px solid red' }}
												height="40"
												width="40"
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
											sx={{ m: 0, pl: 1 }}
										/>
									</Grid>

									<Paper sx={{ display: 'flex', justifyContent: 'space-around', p: 0.5, width: '100%' }}>
										<Button>View</Button>
										<Button>Edit</Button>
										<Button>Remove</Button>
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