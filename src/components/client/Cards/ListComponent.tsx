'use client'

import React, { Fragment, useContext, useState } from "react";
import { filter, includes, map, lowerCase, find } from "lodash";

import { Close, Diversity3, Edit, OpenInNew, PersonAdd, Search } from "@mui/icons-material";
import { Card, CardContent, Grid, IconButton, InputAdornment, List, ListItem, ListItemButton, ListItemText, TextField, Tooltip, Typography } from "@mui/material";
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
						{map(filteredItems, ({ id, name, url, classId, speciesId, subspeciesId }) => {
							const characterClass = find(classes, ['id', classId]);
							const characterSpecies = find(species, ['id', speciesId]);
							const characterSubspecies = find(characterSpecies.subspecies, ['id', subspeciesId]);

							return (
								<ListItem
									style={{
										background: `url("/backgrounds/classes_2014/${characterClass.key}.png") no-repeat right center`,
										backgroundSize: 'auto 100%'
									}}
									key={`player_character_${id}`}
									secondaryAction={
										<IconButton 
											onClick={() => window.open(url, '_blank')}
											disabled={!url}
										>
											<OpenInNew color="secondary"/>
										</IconButton>
									}
								>
									<ListItemButton
										onClick={() => setOpenItem({
											id, 
											name,
											url,
											classId,
											speciesId,
											subspeciesId
										})}
									>
										<ListItemText
											primary={
												<Grid display="flex">
													<Typography>{name}</Typography>
													<Tooltip title={characterSpecies.name}>
														<Image
															alt={`${characterSpecies.key} species icon`}
															src={`/icons/species/${characterSpecies.key}.png`}
															style={{ borderRadius: '4px' }}
															height="25"
															width="25"
														/>
													</Tooltip>
												</Grid>
											}
											secondary={
												<Fragment>
													<Typography>
														{`${characterSubspecies ? `${characterSubspecies.name} ` : ''}`}
														{`${characterSpecies.name} ${characterClass.name}`}
													</Typography>
												</Fragment>
											}
											sx={{ m: 0 }}
										/>
									</ListItemButton>
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